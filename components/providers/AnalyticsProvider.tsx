"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { isGAEnabled, trackPageView } from "@/lib/ga";

type Props = {
  children: React.ReactNode;
};

const AnalyticsProvider = ({ children }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isGAEnabled) return;
    const url = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname || "/";
    trackPageView(url);
  }, [pathname, searchParams]);

  return <>{children}</>;
};

export default AnalyticsProvider;
