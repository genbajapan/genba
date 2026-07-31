import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line py-10">
      <Container className="flex flex-col gap-4 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Genba. Winning Japan Sales for
          SaaS &amp; IT.
        </p>
        <div className="flex gap-5">
          <Link href="/blog" className="hover:text-accent">
            Insights
          </Link>
          <Link href="/services" className="hover:text-accent">
            Advisory
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
