export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
