import Link from "next/link";
import Container from "./Container";

const nav = [
  { href: "/blog", label: "Insights" },
  { href: "/services", label: "Advisory" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-line">
      <Container className="flex items-center justify-between py-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-semibold tracking-tight text-navy">
            Genba
          </span>
          <span className="hidden text-xs uppercase tracking-widest text-slate sm:inline">
            Winning Japan Sales
          </span>
        </Link>
        <nav className="flex gap-6 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
