
export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="relative flex h-28 w-28 items-center justify-center">
        {/* Loading ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-[#E2E8F0] border-t-[#0F766E] border-r-[#F97316]" />

        {/* Company logo */}
        <img
          src="/logo.png"
          alt="NOOR TECHNOLOGIES"
          className="h-16 w-16 object-contain"
        />
      </div>
    </div>
  );
}
