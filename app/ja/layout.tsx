import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Root layout can only set <html lang="en">; correct it here for a11y tools. hreflang tags carry the SEO signal. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang = "ja";`,
        }}
      />
      <Header locale="ja" />
      <main className="flex-1">{children}</main>
      <Footer locale="ja" />
    </>
  );
}
