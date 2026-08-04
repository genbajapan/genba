import Link from "next/link";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {href && linkLabel && (
        <Link href={href} className="text-link">
          {linkLabel} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
