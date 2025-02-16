"use client";

import dynamic from "next/dynamic";

export const WorldWithNoSSR = dynamic(
  () =>
    import("@/app/components/page/about-page/Globe").then((m) => m.World),
  { ssr: false }
);
