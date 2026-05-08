import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { contactItems, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Trang liên hệ Trung tâm Giáo dục Như Ý dành cho phụ huynh và học viên đăng ký tư vấn khóa học.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 to-cyan-950 py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-100 w-100 rounded-full bg-cyan-500/15 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 rounded-full border border-cyan-500/30 bg-cyan-500/15 px-5 py-2 text-cyan-300 hover:bg-cyan-500/15">
            Liên hệ tư vấn
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Đăng ký tư vấn{" "}
            <span className="bg-linear-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              miễn phí
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Để lại thông tin để trung tâm hỗ trợ tư vấn khóa học, hình thức học
            và lộ trình phù hợp nhất.
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Main: form + map side by side */}
          <div className="grid gap-10 lg:grid-cols-2">

            {/* Form */}
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3 sm:mb-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Gửi thông tin tư vấn
                  </h2>
                  <p className="text-sm text-slate-500">
                    Chúng tôi sẽ liên hệ lại sớm nhất
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>

            {/* Map + operating hours */}
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.5134!2d107.0!3d10.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU3JzAwLjAiTiAxMDfCsDA2JzAwLjAiRQ!5e0!3m2!1svi!2svn!4v1620000000000!5m2!1svi!2svn"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ Trung tâm Giáo dục Như Ý"
                  className="sm:h-[280px]"
                />
              </div>

              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-7">
                <h3 className="mb-5 font-bold text-slate-900">Liên hệ trực tiếp</h3>
                <div className="space-y-4">
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600">
                        Số điện thoại
                      </p>
                      <p className="mt-0.5 font-bold text-slate-900">{siteConfig.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600">
                        Địa chỉ
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-700">
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
