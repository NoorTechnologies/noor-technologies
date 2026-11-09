
"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return <Loader />;
}
