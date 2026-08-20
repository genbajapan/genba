export type LeadershipLinkPerson = {
  name: string;
  url: string;
  linkLabel: string;
  linkedinUrl?: string;
  publicInfo?: {
    url: string;
    label: string;
  };
};

const undisclosedPersonPattern = /(非公開|非開示|確認不能|確認でき|未確認|募集中|公開情報)/;

export function isLinkedInUrl(url: string) {
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    return hostname === "linkedin.com" || hostname.endsWith(".linkedin.com");
  } catch {
    return false;
  }
}

function buildLinkedInPeopleSearchUrl(companyName: string, groupLabel: string, personName: string) {
  const identity = undisclosedPersonPattern.test(personName) ? groupLabel : personName;
  const keywords = `${companyName} ${identity}`.replace(/\s+/g, " ").trim();
  return `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(keywords)}`;
}

export function resolveLeadershipLinks(
  companyName: string,
  groupLabel: string,
  person: LeadershipLinkPerson,
) {
  const explicitLinkedInUrl = person.linkedinUrl ?? (isLinkedInUrl(person.url) ? person.url : undefined);
  const linkedinUrl = explicitLinkedInUrl ?? buildLinkedInPeopleSearchUrl(companyName, groupLabel, person.name);
  const publicInfo = person.publicInfo ?? (
    person.url && !isLinkedInUrl(person.url)
      ? { url: person.url, label: person.linkLabel || "公開情報" }
      : undefined
  );

  return {
    linkedinUrl,
    linkedinLabel: explicitLinkedInUrl ? "LinkedIn" : "LinkedInで確認",
    publicInfo,
  };
}
