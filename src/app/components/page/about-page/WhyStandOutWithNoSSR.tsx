'use client'

import dynamic from "next/dynamic";

export const WhyStandOutWithNoSSR = dynamic(
  () => import("@/app/components/page/about-page/WhyStandOut"),
  {
    ssr: false,
  }
);
