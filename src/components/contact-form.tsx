import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form className="w-full space-y-6 rounded-[34px] border border-cyan-100 bg-white p-7 shadow-xl shadow-cyan-950/5 sm:p-9">
      <div className="space-y-2.5">
        <label htmlFor="name" className="text-sm font-medium text-slate-900">
          Họ tên phụ huynh hoặc học sinh
        </label>
        <Input id="name" placeholder="Nhập họ tên" className="h-12 rounded-2xl px-4" />
      </div>

      <div className="space-y-2.5">
        <label htmlFor="contact" className="text-sm font-medium text-slate-900">
          Số điện thoại hoặc email
        </label>
        <Input
          id="contact"
          placeholder="Nhập số điện thoại hoặc email để liên hệ"
          className="h-12 rounded-2xl px-4"
        />
      </div>

      <div className="space-y-2.5">
        <label htmlFor="message" className="text-sm font-medium text-slate-900">
          Mô tả nhu cầu liên hệ
        </label>
        <Textarea
          id="message"
          className="min-h-40 rounded-3xl"
          placeholder="Ví dụ: cần tư vấn khóa tiếng Hàn, gia sư THCS hoặc lịch học phù hợp."
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-full bg-cyan-500 text-white hover:bg-cyan-600 sm:w-auto"
      >
        <Send />
        Gửi liên hệ
      </Button>
    </form>
  );
}
