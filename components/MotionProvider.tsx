"use client";

import { useEffect } from "react";
import { registerGsap } from "@/lib/motion/gsap";
import { destroyLenis, initLenis } from "@/lib/motion/lenis";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();
    initLenis();
    return () => destroyLenis();
  }, []);

  return <>{children}</>;
}
