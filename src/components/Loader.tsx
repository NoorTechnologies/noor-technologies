
export default function Loader() {
  return (
    <div
      role="status"
      aria-label="Loading NOOR TECHNOLOGIES"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F8FAFC]"
    >
      {/* Animated logo */}
      <div className="relative flex h-32 w-32 items-center justify-center">

        {/* Outer rotating ring */}
        <div className="absolute inset-0 animate-spin rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#0F766E_120deg,#F97316_220deg,transparent_320deg)]" />

        {/* Inner white circle */}
        <div className="absolute inset-[4px] rounded-full bg-white" />

        {/* Logo */}
        <img
          src="/logo.png"
          alt="NOOR TECHNOLOGIES"
          width="76"
          height="76"
          fetchPriority="high"
          className="relative z-10 h-[76px] w-[76px] object-contain"
        />
      </div>

      {/* Brand name */}
      <h2 className="mt-7 text-base font-bold tracking-[0.16em] text-[#172033]">
        NOOR <span className="text-[#0F766E]">TECHNOLOGIES</span>
      </h2>

      <p className="mt-2 text-[10px] tracking-[0.2em] text-[#64748B]">
        DIGITAL SOLUTIONS
      </p>

      {/* Loading dots */}
      <div className="mt-7 flex items-center gap-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#0F766E]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#F97316] [animation-delay:150ms]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#0F766E] [animation-delay:300ms]" />
      </div>
    </div>
  );
}
