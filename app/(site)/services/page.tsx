import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = { title: "法人向けサービス", description: "Genbaの法人向け掲載・スポンサー情報。", alternates: { canonical: "/advertise" } };
export default function ServicesPage() { return <section className="page-hero" style={{minHeight:"60vh"}}><Container><p className="eyebrow">GENBA FOR BUSINESS</p><h1>法人向けサービスは<br />「掲載について」へ移動しました。</h1><p className="page-lead">Genbaはアドバイザリー事業から、外資SaaS営業人材のための無料メディアへ移行しました。</p><Link href="/advertise" className="button button-primary" style={{marginTop:28}}>掲載・スポンサーを見る</Link></Container></section>; }
