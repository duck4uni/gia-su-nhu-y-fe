import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import { navItems, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:gap-10">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/logo.jpg"
                  alt="Logo Trung tâm Giáo dục Như Ý"
                  width={52}
                  height={52}
                  className="size-13 object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-500">
                  Education Center
                </p>
                <p className="text-base font-bold text-white">{siteConfig.name}</p>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              Trung tâm đào tạo ngoại ngữ và gia sư học sinh phổ thông tại Đồng Nai.
              Đồng hành cùng học viên trên hành trình tiến bộ bền vững.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Điều hướng
            </h3>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-cyan-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Khóa học
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Tiếng Nhật",
                "Tiếng Hàn",
                "Tiếng Trung",
                "Tiếng Anh",
                "Gia sư Tiểu học",
                "Gia sư THCS",
                "Gia sư THPT",
              ].map((course) => (
                <li key={course}>
                  <Link href="/khoa-hoc" className="transition-colors hover:text-cyan-400">
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Liên hệ
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-3 transition-colors hover:text-cyan-400"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. Bảo lưu mọi quyền.
          </p>
          <p className="text-xs text-slate-600">{siteConfig.address}</p>
        </div>
      </div>
    </footer>
  );
}
