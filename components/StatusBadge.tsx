export default function StatusBadge({ status }: { status: string }) {
  const active = status === "積極採用" || status === "公式確認";
  return (
    <span className={`status-badge ${active ? "status-badge-active" : ""}`}>
      <span aria-hidden="true" className="status-dot" />
      {status}
    </span>
  );
}
