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
    const message = String(data.get("message") ?? "").trim();

    const subject = isEnglish ? `Genba sponsorship inquiry | ${organization}` : `Genbaスポンサー掲載のご相談｜${organization}`;
    const body = (isEnglish ? [
      "I would like to discuss a sponsorship with Genba.",
      "",
      `Company / organization: ${organization}`,
      `Contact name: ${contactName}`,
      `Email: ${email}`,
      `Inquiry type: ${partnerType}`,
      `Official website: ${website || "Not provided"}`,
      `Message: ${message}`,
    ] : [
      "Genbaのスポンサー掲載について相談します。",
      "",
      `会社・組織名：${organization}`,
      `ご担当者名：${contactName}`,
      `メールアドレス：${email}`,
      `ご相談区分：${partnerType}`,
      `公式Webサイト：${website || "未入力"}`,
      `ご相談内容：${message}`,
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
          <span>{isEnglish ? "Inquiry type *" : "ご相談区分 *"}</span>
          <select name="partnerType" required defaultValue="">
            <option value="" disabled>{isEnglish ? "Select one" : "選択してください"}</option>
            <option value={isEnglish ? "Hiring company" : "採用企業"}>{isEnglish ? "Hiring company" : "採用企業"}</option>
            <option value={isEnglish ? "Recruitment firm" : "採用支援会社"}>{isEnglish ? "Recruitment firm" : "採用支援会社"}</option>
            <option value={isEnglish ? "Related service or event" : "関連サービス・イベント"}>{isEnglish ? "Related service or event" : "関連サービス・イベント"}</option>
            <option value={isEnglish ? "Other" : "その他"}>{isEnglish ? "Other" : "その他"}</option>
          </select>
        </label>
        <label className="advertise-form-wide">
          <span>{isEnglish ? "Official website" : "公式Webサイト"}</span>
          <input name="website" type="url" inputMode="url" placeholder="https://" autoComplete="url" />
        </label>
        <label className="advertise-form-wide">
          <span>{isEnglish ? "What would you like Genba readers to discover? *" : "読者に届けたい内容・ご相談内容 *"}</span>
          <textarea name="message" required rows={5} placeholder={isEnglish ? "Briefly tell us about your company, role, service or proposed partnership." : "会社・求人・サービスの概要や、ご希望の取り組みを簡単にご記載ください。"} />
        </label>
      </div>
      <div className="advertise-form-submit">
        <div>
          <strong>{isEnglish ? "We will review relevance before replying" : "読者との関連性を確認してご返信します"}</strong>
          <p>{isEnglish ? "Your entries are not stored on Genba. The button opens a prepared message in your email app." : "入力内容はGenba上に保存されません。ボタンを押すと、お使いのメールアプリで相談メールが開きます。"}</p>
        </div>
        <button type="submit" className="button button-primary">{isEnglish ? "Open inquiry email" : "相談メールを開く"}</button>
      </div>
    </form>
  );
}
