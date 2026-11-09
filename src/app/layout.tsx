
import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.noortechnologies.in"),
  title: {
    default: "NOOR TECHNOLOGIES | Digital Solutions & Software",
    template: "%s | NOOR TECHNOLOGIES",
  },
  description:
    "NOOR TECHNOLOGIES provides website development, custom software, UI/UX design, IT consulting and technology training.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NOOR TECHNOLOGIES",
    description: "Digital Solutions. Software. Technology Education.",
    url: "https://www.noortechnologies.in",
    siteName: "NOOR TECHNOLOGIES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8FAFC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable}`}>
        {children}
      </body>
    </html>
  );
}
