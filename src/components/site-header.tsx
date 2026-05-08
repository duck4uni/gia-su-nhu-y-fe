"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Menu, Phone } from "lucide-react";

import { navItems, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40">
      <div className="hidden border-b border-slate-800 bg-slate-900 lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-cyan-500" />
            <span>{siteConfig.address}</span>
          </div>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-cyan-400"
          >
            <Phone className="h-3.5 w-3.5 text-cyan-500" />
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <div className="border-b border-cyan-100/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="overflow-hidden rounded-2xl border border-cyan-100 shadow-lg shadow-cyan-500/10">
              <Image
                src="/logo.jpg"
                alt="Logo Trung tâm Giáo dục Như Ý"
                width={48}
                height={48}
                className="size-12 object-cover"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-cyan-600">
                Education Center
              </p>
              <p className="truncate text-base font-bold text-slate-950">
                {siteConfig.name}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-cyan-100 bg-white/90 p-1.5 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-cyan-500 text-white shadow-sm"
                      : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-700"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-cyan-200 text-cyan-700 hover:bg-cyan-50"
            >
              <Link href="/lien-he">Tư vấn ngay</Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-cyan-500 text-white shadow-sm hover:bg-cyan-600"
            >
              <a href={siteConfig.phoneHref}>
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-cyan-200 text-cyan-700 hover:bg-cyan-50"
                >
                  <Menu />
                  <span className="sr-only">Mở menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="border-l-cyan-100 bg-white/95 sm:max-w-xs">
                <SheetHeader>
                  <SheetTitle>{siteConfig.name}</SheetTitle>
                  <SheetDescription>
                    Điều hướng nhanh đến các trang chính của website.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-2 px-4 pb-6">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-cyan-500 text-white"
                            : "text-slate-600 hover:bg-cyan-50"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <div className="mt-4 flex flex-col gap-3 border-t border-cyan-100 pt-4">
                    <a
                      href={siteConfig.phoneHref}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <Phone className="h-4 w-4 text-cyan-500" />
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
