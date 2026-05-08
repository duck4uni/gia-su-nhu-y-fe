import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Phone,
  Quote,
  Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  contactItems,
  courses,
  siteConfig,
  stats,
  testimonials,
  whyUs,
} from "@/lib/site-data";

const courseCardStyles = [
  {
    border: "border-cyan-200",
    iconBg: "bg-cyan-100",
    iconText: "text-cyan-600",
    badge: "text-cyan-700 bg-cyan-50",
    check: "text-cyan-500",
    btn: "border-cyan-300 text-cyan-700 hover:bg-cyan-50",
  },
  {
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    badge: "text-blue-700 bg-blue-50",
    check: "text-blue-500",
    btn: "border-blue-300 text-blue-700 hover:bg-blue-50",
  },
  {
    border: "border-violet-200",
    iconBg: "bg-violet-100",
    iconText: "text-violet-600",
    badge: "text-violet-700 bg-violet-50",
    check: "text-violet-500",
    btn: "border-violet-300 text-violet-700 hover:bg-violet-50",
  },
  {
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    badge: "text-emerald-700 bg-emerald-50",
    check: "text-emerald-500",
    btn: "border-emerald-300 text-emerald-700 hover:bg-emerald-50",
  },
];

const whyIconStyles = [
  "bg-rose-100 text-rose-600",
  "bg-cyan-100 text-cyan-600",
  "bg-emerald-100 text-emerald-600",
  "bg-blue-100 text-blue-600",
  "bg-amber-100 text-amber-600",
  "bg-violet-100 text-violet-600",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-cyan-950 to-slate-900">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 h-130 w-130 rounded-full bg-cyan-500/20 blur-[90px]" />
          <div className="absolute bottom-0 left-0 h-100 w-100 rounded-full bg-blue-600/15 blur-[80px]" />
          <div className="absolute right-1/3 top-1/2 h-65 w-65 rounded-full bg-cyan-300/10 blur-[60px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-6 text-white sm:space-y-8">
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[64px]">
                Đồng hành cùng{" "}
                <span className="bg-linear-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
                  học sinh
                </span>{" "}
                trên hành trình tiến bộ bền vững.
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {siteConfig.heroDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-cyan-500 px-8 text-white shadow-lg shadow-cyan-500/30 hover:bg-cyan-400"
                >
                  <Link href="/khoa-hoc">
                    Xem khóa học <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/25 bg-white/10 px-8 text-white backdrop-blur hover:bg-white/20 hover:text-white"
                >
                  <Link href="/lien-he">Tư vấn miễn phí</Link>
                </Button>
              </div>

              {/* <div className="flex flex-wrap gap-2.5 pt-1">
                {["Tiếng Nhật", "Tiếng Hàn", "Tiếng Trung", "Tiếng Anh", "Gia sư TH", "Gia sư THCS", "Gia sư THPT"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white/70"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div> */}
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg px-6 pb-10 pt-2 sm:px-8 sm:pb-12 lg:p-0">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-400/30 to-blue-500/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
                  <Image
                    src="/seo.jpg"
                    alt="Trung tâm Giáo dục Như Ý"
                    width={700}
                    height={370}
                    className="w-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/20 bg-slate-900/80 p-4 text-white backdrop-blur-md">
                  <p className="text-3xl font-bold text-cyan-400">500+</p>
                  <p className="text-sm text-slate-300">Học viên tin tưởng</p>
                </div>
                <div className="absolute -right-5 -top-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/20 p-4 text-white backdrop-blur-md">
                  <p className="text-3xl font-bold">5+</p>
                  <p className="text-sm text-cyan-200">Năm kinh nghiệm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-cyan-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-px bg-cyan-100 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-3 bg-white px-4 py-10 text-center sm:px-6 sm:py-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <stat.icon className="h-7 w-7" />
                </div>
                <p className="text-3xl font-bold text-slate-900 sm:text-4xl">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="bg-slate-50 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-14">
            <Badge className="mb-4 rounded-full bg-cyan-100 px-4 py-1.5 text-cyan-700 hover:bg-cyan-100">
              Chương trình đào tạo
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Các khóa học tại Trung tâm Như Ý
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
              Đào tạo ngoại ngữ và gia sư học sinh phổ thông với lộ trình phù hợp, môi trường học tập nghiêm túc.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, i) => {
              const s = courseCardStyles[i % courseCardStyles.length];
              return (
                <div
                  key={course.slug}
                  className={`flex flex-col rounded-2xl border-2 ${s.border} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${s.iconBg}`}>
                    <GraduationCap className={`h-6 w-6 ${s.iconText}`} />
                  </div>
                  <span className={`mb-3 w-fit rounded-full px-3 py-1 text-xs font-semibold ${s.badge}`}>
                    {course.subtitle}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{course.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">{course.description}</p>
                  <ul className="mb-5 space-y-2">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className={`mt-0.5 h-4 w-4 shrink-0 ${s.check}`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className={`w-full rounded-xl border-2 ${s.btn}`}>
                    <Link href="/lien-he">Đăng ký tư vấn</Link>
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full bg-cyan-500 px-10 text-white hover:bg-cyan-600">
              <Link href="/khoa-hoc">
                Xem tất cả khóa học <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-14">
            <Badge className="mb-4 rounded-full bg-cyan-100 px-4 py-1.5 text-cyan-700 hover:bg-cyan-100">
              Điểm nổi bật
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Tại sao chọn Như Ý?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              Chúng tôi cam kết mang lại môi trường học tập tốt nhất và hiệu quả thực sự cho từng học viên.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${whyIconStyles[i % whyIconStyles.length]}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-linear-to-br from-slate-950 via-cyan-950 to-slate-900 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center text-white sm:mb-14">
            <Badge className="mb-4 rounded-full border border-cyan-500/30 bg-cyan-500/20 px-4 py-1.5 text-cyan-300 hover:bg-cyan-500/20">
              Phụ huynh &amp; Học viên nói gì
            </Badge>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Cảm nhận thực tế</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-400 sm:text-lg">
              Hơn 500 học viên và phụ huynh đã tin tưởng và gắn bó cùng Trung tâm Như Ý.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <Quote className="mb-4 h-8 w-8 text-cyan-400/60" />
                <p className="mb-6 flex-1 leading-relaxed text-slate-300">{t.content}</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-bold text-cyan-300">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-slate-400">{t.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden bg-linear-to-r from-cyan-500 to-sky-500 py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-5xl">
            Bắt đầu hành trình học tập ngay hôm nay!
          </h2>
          <p className="mt-4 text-base text-cyan-50/90 sm:mt-5 sm:text-lg">
            Liên hệ với chúng tôi để được tư vấn miễn phí và chọn khóa học phù hợp nhất với bạn.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-8 text-cyan-600 shadow-lg hover:bg-cyan-50"
            >
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                <Phone className="mr-2 h-4 w-4" />
                Gọi ngay: {siteConfig.phone}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/50 bg-white/15 px-8 text-white hover:bg-white/25 hover:text-white"
            >
              <Link href="/lien-he">Để lại thông tin tư vấn</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section className="bg-slate-50 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-14">
            <Badge className="mb-4 rounded-full bg-cyan-100 px-4 py-1.5 text-cyan-700 hover:bg-cyan-100">
              Liên hệ
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Thông tin liên hệ</h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Ghé thăm hoặc liên hệ trực tiếp để được hỗ trợ tư vấn nhanh nhất
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center rounded-2xl border border-cyan-100 bg-white p-8 text-center shadow-sm transition-all hover:border-cyan-300 hover:shadow-md"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                  <item.icon className="h-8 w-8" />
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-700">
                  {item.label}
                </p>
                <p className="text-slate-700">{item.value}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-cyan-100 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.5134!2d107.0!3d10.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU3JzAwLjAiTiAxMDfCsDA2JzAwLjAiRQ!5e0!3m2!1svi!2svn!4v1620000000000!5m2!1svi!2svn"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ Trung tâm Giáo dục Như Ý"
            />
          </div>
        </div>
      </section>
    </>
  );
}
