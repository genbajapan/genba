export const USD_JPY_REFERENCE_RATE = 157;

const USD_AMOUNT_PATTERN = /(?:\$[\d,.]+(?:\.\d+)?(?:[KMB]|万|億|兆)?|[\d,.]+(?:\.\d+)?(?:万|億|兆)?ドル)(?!\s*=)(?:\s*[（(]約?[^）)]*円[）)])?/gi;

export function parseUsdAmount(token: string) {
  const amountPart = token.match(/(?:\$|^)([\d,.]+(?:\.\d+)?)([KMB万億兆]?)/i);
  if (!amountPart) return undefined;
  const amount = Number(amountPart[1].replaceAll(",", ""));
  if (!Number.isFinite(amount)) return undefined;
  const multipliers: Record<string, number> = {
    "": 1,
    K: 1_000,
    M: 1_000_000,
    B: 1_000_000_000,
    万: 10_000,
    億: 100_000_000,
    兆: 1_000_000_000_000,
  };
  return amount * (multipliers[amountPart[2].toUpperCase()] ?? multipliers[amountPart[2]] ?? 1);
}

function rounded(value: number, decimals = 0) {
  return value.toLocaleString("ja-JP", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: Number.isInteger(value) ? 0 : decimals,
  });
}

export function formatApproximateJpy(usd: number) {
  const yen = usd * USD_JPY_REFERENCE_RATE;
  if (yen >= 1_000_000_000_000) return `約${rounded(yen / 1_000_000_000_000, yen < 10_000_000_000_000 ? 1 : 0)}兆円`;
  if (yen >= 100_000_000) return `約${rounded(yen / 100_000_000, yen < 10_000_000_000 ? 1 : 0)}億円`;
  if (yen >= 10_000) return `約${rounded(yen / 10_000, yen < 1_000_000 ? 1 : 0)}万円`;
  return `約${rounded(Math.round(yen))}円`;
}

export function addYenConversions(text: string) {
  return text.replace(USD_AMOUNT_PATTERN, (token) => {
    const dollarToken = token.replace(/\s*[（(]約?[^）)]*円[）)]\s*$/, "");
    const usd = parseUsdAmount(dollarToken);
    return usd === undefined ? token : `${dollarToken}(${formatApproximateJpy(usd)})`;
  });
}

export function addYenConversionsDeep<T>(value: T): T {
  if (typeof value === "string") return addYenConversions(value) as T;
  if (Array.isArray(value)) return value.map(addYenConversionsDeep) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, key === "url" || key.endsWith("Url") ? child : addYenConversionsDeep(child)]),
    ) as T;
  }
  return value;
}
