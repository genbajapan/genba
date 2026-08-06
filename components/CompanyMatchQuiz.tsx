"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  careerStages,
  oteBands,
  englishLevels,
  motivations,
  computeMatches,
  type CareerStageId,
  type OteBandId,
  type EnglishLevelId,
  type MotivationId,
  type MatchAnswers,
} from "@/lib/company-match";

const MAX_MOTIVATIONS = 3;

const initialAnswers: MatchAnswers = {
  careerStage: null,
  oteBand: null,
  englishLevel: null,
  motivationIds: [],
};

type Step = 0 | 1 | 2 | 3 | 4;

export default function CompanyMatchQuiz() {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<MatchAnswers>(initialAnswers);

  const results = useMemo(() => (step === 4 ? computeMatches(answers).slice(0, 3) : []), [step, answers]);

  function selectCareerStage(id: CareerStageId) {
    setAnswers((prev) => ({ ...prev, careerStage: id }));
    setStep(1);
  }

  function selectOteBand(id: OteBandId) {
    setAnswers((prev) => ({ ...prev, oteBand: id }));
    setStep(2);
  }

  function selectEnglishLevel(id: EnglishLevelId) {
    setAnswers((prev) => ({ ...prev, englishLevel: id }));
    setStep(3);
  }

  function toggleMotivation(id: MotivationId) {
    setAnswers((prev) => {
      const has = prev.motivationIds.includes(id);
      if (has) return { ...prev, motivationIds: prev.motivationIds.filter((m) => m !== id) };
      if (prev.motivationIds.length >= MAX_MOTIVATIONS) return prev;
      return { ...prev, motivationIds: [...prev.motivationIds, id] };
    });
  }

  function restart() {
    setAnswers(initialAnswers);
    setStep(0);
  }

  const stepLabels = ["経験レベル", "現在のOTE", "英語力", "重視すること", "結果"];

  return (
    <div className="match-quiz">
      <div className="match-quiz-progress">
        {stepLabels.map((label, index) => (
          <span key={label} className={index <= step ? "match-quiz-progress-done" : ""}>
            {label}
          </span>
        ))}
      </div>

      <div className="match-quiz-chat">
        {step >= 0 && (
          <div className="match-quiz-bubble">
            <p>まず、直近で担当していたセグメント・レベルを教えてください。</p>
            {step === 0 && (
              <div className="match-quiz-options">
                {careerStages.map((stage) => (
                  <button key={stage.id} type="button" onClick={() => selectCareerStage(stage.id)}>
                    {stage.label}
                  </button>
                ))}
              </div>
            )}
            {step > 0 && answers.careerStage && (
              <p className="match-quiz-answer">→ {careerStages.find((s) => s.id === answers.careerStage)?.label}</p>
            )}
          </div>
        )}

        {step >= 1 && (
          <div className="match-quiz-bubble">
            <p>今のOTE(達成想定の年収)は、どのあたりですか。</p>
            {step === 1 && (
              <div className="match-quiz-options">
                {oteBands.map((band) => (
                  <button key={band.id} type="button" onClick={() => selectOteBand(band.id)}>
                    {band.label}
                  </button>
                ))}
              </div>
            )}
            {step > 1 && answers.oteBand && <p className="match-quiz-answer">→ {oteBands.find((b) => b.id === answers.oteBand)?.label}</p>}
          </div>
        )}

        {step >= 2 && (
          <div className="match-quiz-bubble">
            <p>英語での実務対応レベルはいかがですか。</p>
            {step === 2 && (
              <div className="match-quiz-options">
                {englishLevels.map((level) => (
                  <button key={level.id} type="button" onClick={() => selectEnglishLevel(level.id)}>
                    {level.label}
                  </button>
                ))}
              </div>
            )}
            {step > 2 && answers.englishLevel && (
              <p className="match-quiz-answer">→ {englishLevels.find((l) => l.id === answers.englishLevel)?.label}</p>
            )}
          </div>
        )}

        {step >= 3 && (
          <div className="match-quiz-bubble">
            <p>転職で重視したいことを、最大{MAX_MOTIVATIONS}つまで選んでください。</p>
            <div className="match-quiz-options match-quiz-options-multi">
              {motivations.map((motivation) => {
                const active = answers.motivationIds.includes(motivation.id);
                const disabled = !active && answers.motivationIds.length >= MAX_MOTIVATIONS;
                return (
                  <button
                    key={motivation.id}
                    type="button"
                    className={active ? "match-quiz-option-active" : ""}
                    disabled={disabled}
                    onClick={() => toggleMotivation(motivation.id)}
                  >
                    {motivation.label}
                  </button>
                );
              })}
            </div>
            {step === 3 && (
              <button
                type="button"
                className="match-quiz-submit"
                disabled={answers.motivationIds.length === 0}
                onClick={() => setStep(4)}
              >
                マッチする会社を見る →
              </button>
            )}
          </div>
        )}
      </div>

      {step === 4 && (
        <div className="match-quiz-results">
          <p className="match-quiz-results-note">
            回答はこのブラウザ内でのみ処理され、Genbaには送信・保存されません。以下は公開情報から作成した各社の特徴と、あなたの回答の一致度によるGenba分析です。合格可能性を示すものではありません。
          </p>
          <div className="match-quiz-result-grid">
            {results.map((result, index) => (
              <article key={result.slug} className="match-quiz-result-card">
                <div className="match-quiz-result-rank">MATCH 0{index + 1}</div>
                <h3>{result.name}</h3>
                <p className="match-quiz-result-category">{result.category}</p>
                {result.matchedMotivationLabels.length > 0 && (
                  <div className="match-quiz-result-tags">
                    {result.matchedMotivationLabels.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>
                )}
                <p className="match-quiz-result-commentary">{result.commentary}</p>
                <Link href={`/companies/${result.slug}`} className="button button-secondary">
                  個別ページを見る →
                </Link>
              </article>
            ))}
          </div>
          <button type="button" className="match-quiz-restart" onClick={restart}>
            もう一度診断する
          </button>
        </div>
      )}
    </div>
  );
}
