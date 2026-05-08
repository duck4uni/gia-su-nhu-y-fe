import { ArrowRight, BookOpenCheck, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

import type { CourseItem } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CourseCardProps = {
  course: CourseItem;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="h-full rounded-[28px] border border-cyan-100 bg-white/92 shadow-lg shadow-cyan-950/5">
      <CardHeader className="space-y-5 p-6">
        <Badge className="w-fit rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-700 hover:bg-cyan-500/10">
          {course.subtitle}
        </Badge>
        <div className="space-y-3">
          <CardTitle className="text-xl leading-tight text-slate-950">
            {course.title}
          </CardTitle>
          <p className="text-sm leading-7 text-slate-600">{course.description}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-5 px-6 pb-5">
        <div className="grid gap-3 rounded-[24px] bg-cyan-50 p-5 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <Users className="size-4 text-cyan-600" />
            <span>{course.audience}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="size-4 text-cyan-600" />
            <span>{course.format}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpenCheck className="size-4 text-cyan-600" />
            <span>Liên hệ để được tư vấn và đăng ký</span>
          </div>
        </div>

        <ul className="space-y-3 text-sm leading-6 text-slate-700">
          {course.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span className="mt-2 size-1.5 rounded-full bg-cyan-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto border-t border-cyan-100 p-6">
        <Button asChild className="w-full rounded-full bg-cyan-500 text-white hover:bg-cyan-600">
          <Link href="/lien-he">
            Liên hệ đăng ký
            <ArrowRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
