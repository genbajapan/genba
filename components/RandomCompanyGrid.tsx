"use client";

import { useEffect, useState } from "react";
import CompanyCard from "@/components/CompanyCard";
import type { Company } from "@/lib/market-data";

function pickRandomCompanies(companies: Company[], count: number) {
  const shuffled = [...companies];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled.slice(0, count);
}

export default function RandomCompanyGrid({ companies, count = 4 }: { companies: Company[]; count?: number }) {
  const [displayedCompanies, setDisplayedCompanies] = useState(() => companies.slice(0, count));

  useEffect(() => {
    setDisplayedCompanies(pickRandomCompanies(companies, count));
  }, [companies, count]);

  return (
    <div className="card-grid">
      {displayedCompanies.map((company) => <CompanyCard key={company.slug} company={company} />)}
    </div>
  );
}
