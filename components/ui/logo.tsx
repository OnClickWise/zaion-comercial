"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita mismatch de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logoSrc =
    resolvedTheme === "dark"
      ? "/images/logo-dark.png"
      : "/images/logo-light.png";

  return (
    <div className="relative h-12 md:h-14 w-auto">
      <Image
        src={logoSrc}
        alt="Logo ZAION"
        width={220}
        height={60}
        priority
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
