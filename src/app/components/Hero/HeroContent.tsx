import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, TicketIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroContent = () => {
  return (
    <div className="relative z-20 flex flex-col justify-center text-center">
      <Badge
        variant="outline"
        className="mx-auto mt-20 w-fit animate-appear opacity-0"
      >
        <div className="flex items-center gap-1 text-muted-foreground-dark">
          عنوان بج بالای صفحه <ArrowLeftIcon className="h-3 w-3 text-white" />
        </div>
      </Badge>
      <h1 className="inline-block animate-appear bg-gradient-to-r from-foreground-dark to-muted-foreground-dark bg-clip-text pb-8 pt-12 text-[32px] font-extrabold text-transparent opacity-0 lg:text-[80px] lg:leading-[80px]">
        همایش فرانت چپتر ۱۴۰۳{" "}
      </h1>

      <h2 className="mb-6 animate-appear text-[24px] font-bold leading-[24px] text-brand-foreground-dark opacity-0 lg:mb-12 lg:text-[56px] lg:leading-[56px]">
        بزرگترین همایش فرانت‌اند ایران
      </h2>
      <p className="t ext-base mx-auto mb-12 max-w-[360px] animate-appear font-medium text-[#A1A1AA] opacity-0 sm:max-w-full lg:text-xl">
        همایش فرانت چپتر محلی برای گردهمایی و به اشتراک‌گذاری تجربیات
        <br className="hidden sm:block" /> برنامه‌نویسان، متخصصین و علاقه‌مندان
        حوزه فرانت‌اند
      </p>
      <div className="relative z-10 flex animate-appear flex-wrap justify-center gap-4 opacity-0 delay-300">
        <Button
          variant="secondary"
          size="lg"
          className="rounded-md text-primary-foreground-dark"
        >
          <div className="flex gap-2">
            <TicketIcon className="h-4 w-4" />
            <p>ثبت نام در همایش</p>
          </div>
        </Button>
        <div className="overflow-hidden rounded-md">
          <Button
            variant="glow"
            size="lg"
            className="border-gradient bg-gradient-to-t from-[rgba(250,250,250,0.1)] to-[rgba(250,250,250,0.05)]"
          >
            <Link href={"/"}>ارتباط با پشتیبانی</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
