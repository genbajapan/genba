import AdvertisePageContent from "@/components/AdvertisePageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "スポンサー掲載について",
    description: "外資IT・SaaSの現役層と予備軍へ価値を届けたい企業のための、Genbaスポンサー掲載お問い合わせページです。",
    path: "/advertise",
  }),
  alternates: { canonical: "/advertise", languages: { ja: "/advertise", en: "/en/advertise" } },
};

export default function AdvertisePage() {
  return <AdvertisePageContent language="ja" />;
}
