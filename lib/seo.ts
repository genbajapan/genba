import type { Metadata } from "next";

const OG_IMAGE = "/og-genba-v3.png";
const OG_IMAGE_ALT = "Genba — 小中規模外資IT企業研究所";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} — Genba`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: path,
      siteName: "Genba",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [OG_IMAGE] },
  };
}
