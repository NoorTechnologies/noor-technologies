
"use client";

import { useState } from "react";

const primaryLinks = [
  { name: "Home", href: "#home", icon: "⌂" },
  { name: "Services", href: "#services", icon: "▦" },
  { name: "Contact", href: "#contact", icon: "✉" },
];

const moreLinks = [
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Portfolio", href: "#portfolio" },
];

const allLinks = [
  { name: "Home", href: "#home", icon: "⌂" },
  { name: "About", href: "#about", icon: "◉" },
  { name: "Services", href: "#services", icon: "▦" },
  { name: "Courses", href: "#courses", icon: "▤" },
  { name: "Portfolio", href: "#portfolio", icon: "▣" },
  { name: "Contact", href: "#contact", icon: "✉" },
];

export default function BottomNav() {
  const [showMore, setShowMore] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(12px+env(safe-area-inset-bottom))]"
    >
      <div className="relative mx-auto max-w-2xl rounded-2xl border border-[#E2E8F0] bg-white/95 p-2 shadow-[0_4px_25px_rgba(15,23,42,0.14)] backdrop-blur-md">

        {/* MOBILE */}
        <div className="grid grid-cols-4 sm:hidden">
          {primaryLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setShowMore(false)}
              className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[#64748B] hover:bg-[#F0FDFA] hover:text-[#0F766E]"
            >
              <span className="text-xl leading-none">{link.icon}</span>
              <span className="text-[10px] font-semibold">{link.name}</span>
            </a>
          ))}

          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            aria-expanded={showMore}
            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl ${
              showMore
                ? "bg-[#F0FDFA] text-[#0F766E]"
                : "text-[#64748B]"
            }`}
          >
            <span className="text-xl leading-none">•••</span>
            <span className="text-[10px] font-semibold">More</span>
          </button>
        </div>

        {/* MOBILE MORE MENU */}
        {showMore && (
          <div className="absolute bottom-full right-2 mb-3 flex min-w-40 flex-col gap-1 rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-xl sm:hidden">
            {moreLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setShowMore(false)}
                className="rounded-lg px-4 py-3 text-xs font-semibold text-[#172033] hover:bg-[#F0FDFA] hover:text-[#0F766E]"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        {/* DESKTOP */}
        <div className="hidden grid-cols-6 sm:grid">
          {allLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[#64748B] hover:bg-[#F0FDFA] hover:text-[#0F766E]"
            >
              <span className="text-lg">{link.icon}</span>
              <span className="text-[10px] font-semibold">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
