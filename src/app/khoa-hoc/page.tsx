import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, GraduationCap, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Khóa học",
  description:
    "Danh sách khóa học tại Trung tâm Giáo dục Như Ý gồm ngoại ngữ và gia sư các môn học TH, THCS, THPT.",
};

const cardStyles = [
  {
    header: "from-cyan-500 to-cyan-600",
    badge: "bg-cyan-100 text-cyan-800",
    check: "text-cyan-600",
    btn: "bg-cyan-500 hover:bg-cyan-600",
    audienceBg: "bg-cyan-50",
    audienceText: "text-cyan-700",
  },
  {
    header: "from-blue-500 to-blue-600",
    badge: "bg-blue-100 text-blue-800",
    check: "text-blue-600",
    btn: "bg-blue-500 hover:bg-blue-600",
    audienceBg: "bg-blue-50",
    audienceText: "text-blue-700",
  },
  {
    header: "from-violet-500 to-violet-600",
    badge: "bg-violet-100 text-violet-800",
    check: "text-violet-600",
    btn: "bg-violet-500 hover:bg-violet-600",
    audienceBg: "bg-violet-50",
    audienceText: "text-violet-700",
  },
  {
    header: "from-emerald-500 to-emerald-600",
    badge: "bg-emerald-100 text-emerald-800",
    check: "text-emerald-600",
    btn: "bg-emerald-500 hover:bg-emerald-600",
    audienceBg: "bg-emerald-50",
    audienceText: "text-emerald-700",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 to-cyan-950 py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-100 w-100 rounded-full bg-cyan-500/15 blur-[80px]" />
          <div className="absolute bottom-0 left-0 h-75 w-75 rounded-full bg-blue-600/10 blur-[60px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 rounded-full border border-cyan-500/30 bg-cyan-500/15 px-5 py-2 text-cyan-300 hover:bg-cyan-500/15">
            Chương trình đào tạo
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Các khóa học tại{" "}
            <span className="bg-linear-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Trung tâm Như Ý
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Trung tâm hiện đào tạo ngoại ngữ và nhận gia sư các môn học phổ thông. Mỗi chương
            trình đều được xây dựng phù hợp với từng đối tượng học viên.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Tiếng Nhật", "Tiếng Hàn", "Tiếng Trung", "Tiếng Anh", "Gia sư TH", "Gia sư THCS", "Gia sư THPT"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm text-white/70"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-slate-50 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {courses.map((course, i) => {
              const s = cardStyles[i % cardStyles.length];
              return (
                <div
                  key={course.slug}
                  className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
                >
                  {/* Card header gradient */}
                  <div className={`bg-linear-to-r ${s.header} p-7`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${s.badge}`}>
                          {course.subtitle}
                        </span>
                        <h2 className="mt-3 text-2xl font-bold text-white">{course.title}</h2>
                      </div>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                        <GraduationCap className="h-7 w-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-7">
                    <p className="mb-6 leading-relaxed text-slate-600">{course.description}</p>

                    <div className={`mb-6 flex flex-wrap gap-4 rounded-xl ${s.audienceBg} px-5 py-4`}>
                      <div className={`flex items-center gap-2 text-sm font-medium ${s.audienceText}`}>
                        <Users className="h-4 w-4" />
                        {course.audience}
                      </div>
                      <div className={`flex items-center gap-2 text-sm font-medium ${s.audienceText}`}>
                        <GraduationCap className="h-4 w-4" />
                        {course.format}
                      </div>
                    </div>

                    <ul className="mb-7 space-y-3">
                      {course.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle className={`mt-0.5 h-5 w-5 shrink-0 ${s.check}`} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`w-full rounded-xl text-white ${s.btn}`}
                      size="lg"
                    >
                      <Link href="/lien-he">
                        Đăng ký tư vấn ngay <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-linear-to-r from-cyan-500 to-sky-500 p-7 text-center text-white shadow-lg sm:mt-16 sm:p-10">
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
              Chưa biết chọn khóa học nào phù hợp?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-cyan-50/90">
              Liên hệ với chúng tôi để được tư vấn miễn phí. Trung tâm sẽ giúp bạn xác định lộ trình học phù hợp nhất.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-7 rounded-full bg-white px-8 text-cyan-600 hover:bg-cyan-50"
            >
              <Link href="/lien-he">Liên hệ tư vấn miễn phí</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}



