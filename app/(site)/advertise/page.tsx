import AdvertisePageContent from "@/components/AdvertisePageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "初期3社限定・実証パートナー",
    description: "外資IT営業人材へ企業理解を届けるGenba実証パートナー。月額8万円、最低3カ月。企業ページ、ニュースレター、X配信、計測、月次レポートを提供します。",
    path: "/advertise",
  }),
  alternates: { canonical: "/advertise", languages: { ja: "/advertise", en: "/en/advertise" } },
};

export default function AdvertisePage() {
  return <AdvertisePageContent language="ja" />;
}
