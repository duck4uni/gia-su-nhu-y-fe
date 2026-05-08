import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";

import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://giasunhuy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trung tâm Giáo dục Như Ý",
    template: "%s | Trung tâm Giáo dục Như Ý",
  },
  description:
    "Trung tâm Giáo dục Như Ý đào tạo ngoại ngữ Nhật - Hàn - Trung - Anh và gia sư các môn học TH, THCS, THPT tại Đồng Nai.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Trung tâm Giáo dục Như Ý",
    description:
      "Đào tạo ngoại ngữ Nhật - Hàn - Trung - Anh và gia sư các môn học TH, THCS, THPT tại Đồng Nai.",
    siteName: "Trung tâm Giáo dục Như Ý",
    locale: "vi_VN",
    images: [
      {
        url: "/seo.jpg",
        width: 1200,
        height: 630,
        alt: "Trung tâm Giáo dục Như Ý",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trung tâm Giáo dục Như Ý",
    description:
      "Đào tạo ngoại ngữ Nhật - Hàn - Trung - Anh và gia sư các môn học TH, THCS, THPT tại Đồng Nai.",
    images: ["/seo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
