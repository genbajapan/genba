"use client";

import type { FormEvent } from "react";

const inquiryAddress = "js@genbajapan.com";

export default function AdvertiseInquiryForm({ language = "ja" }: { language?: "ja" | "en" }) {
  const isEnglish = language === "en";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const organization = String(data.get("organization") ?? "").trim();
    const contactName = String(data.get("contactName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const partnerType = String(data.get("partnerType") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();
    const hiringRoles = String(data.get("hiringRoles") ?? "").trim();
    const purpose = String(data.get("purpose") ?? "").trim();
    const desiredStart = String(data.get("desiredStart") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();

    const subject = isEnglish ? `Genba pilot partnership inquiry | ${organization}` : `Genba掲載相談｜${organization}`;
    const body = (isEnglish ? [
      "I would like to discuss the Genba pilot partnership.",
      "",
      `Company / organization: ${organization}`,
      `Contact name: ${contactName}`,
      `Email: ${email}`,
      `Partner type: ${partnerType}`,
      `Official website: ${website || "Not provided"}`,
      `Hiring roles / specialty: ${hiringRoles}`,
      `Objective: ${purpose}`,
      `Preferred start: ${desiredStart}`,
      `Additional notes: ${notes || "Not provided"}`,
    ] : [
      "Genba掲載パートナーについて相談します。",
      "",
      `会社・組織名：${organization}`,
      `ご担当者名：${contactName}`,
      `メールアドレス：${email}`,
      `ご相談区分：${partnerType}`,
      `公式Webサイト：${website || "未入力"}`,
      `採用職種・得意領域：${hiringRoles}`,
      `掲載目的：${purpose}`,
      `希望開始時期：${desiredStart}`,
      `補足事項：${notes || "未入力"}`,
    ]).join("\n");

    window.location.href = `mailto:${inquiryAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="advertise-inquiry-form" onSubmit={handleSubmit}>
      <div className="advertise-form-grid">
        <label>
          <span>{isEnglish ? "Company / organization *" : "会社・組織名 *"}</span>
          <input name="organization" required autoComplete="organization" />
        </label>
        <label>
          <span>{isEnglish ? "Contact name *" : "ご担当者名 *"}</span>
          <input name="contactName" required autoComplete="name" />
        </label>
        <label>
          <span>{isEnglish ? "Business email *" : "メールアドレス *"}</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          <span>{isEnglish ? "Partner type *" : "ご相談区分 *"}</span>
          <select name="partnerType" required defaultValue="">
            <option value="" disabled>{isEnglish ? "Select one" : "選択してください"}</option>
            <option value={isEnglish ? "Hiring company" : "採用企業"}>{isEnglish ? "Hiring company" : "採用企業"}</option>
            <option value={isEnglish ? "Specialist recruitment firm" : "外資IT特化型の採用支援会社"}>{isEnglish ? "Specialist recruitment firm" : "外資IT特化型の採用支援会社"}</option>
          </select>
        </label>
        <label className="advertise-form-wide">
          <span>{isEnglish ? "Official website" : "公式Webサイト"}</span>
          <input name="website" type="url" inputMode="url" placeholder="https://" autoComplete="url" />
        </label>
        <label className="advertise-form-wide">
          <span>{isEnglish ? "Hiring roles / specialty *" : "採用職種・得意領域 *"}</span>
          <input name="hiringRoles" required placeholder={isEnglish ? "e.g. Founding AE, Enterprise AE, Japan SaaS sales recruitment" : "例：Enterprise AE、外資IT営業職の紹介"} />
        </label>
        <label className="advertise-form-wide">
          <span>{isEnglish ? "Partnership objective *" : "掲載目的 *"}</span>
          <textarea name="purpose" required rows={4} placeholder={isEnglish ? "Tell us about your hiring context and what candidates should understand." : "採用背景や、Genbaで特に伝えたい内容をご記載ください。"} />
        </label>
        <label>
          <span>{isEnglish ? "Preferred start *" : "希望開始時期 *"}</span>
          <input name="desiredStart" type="month" required />
        </label>
        <label>
          <span>{isEnglish ? "Additional notes" : "補足事項"}</span>
          <input name="notes" placeholder={isEnglish ? "Questions or requests" : "質問や希望があればご記載ください。"} />
        </label>
      </div>
      <div className="advertise-form-submit">
        <div>
          <strong>{isEnglish ? "We normally reply within two business days" : "原則2営業日以内に掲載可否をご連絡"}</strong>
          <p>{isEnglish ? "Your entries are not stored on Genba. The button opens a prepared message in your email app." : "入力内容はGenba上に保存されません。ボタンを押すと、お使いのメールアプリで相談メールが開きます。"}</p>
        </div>
        <button type="submit" className="button button-primary">{isEnglish ? "Open inquiry email" : "入力内容をメールで送る"}</button>
      </div>
    </form>
  );
}
