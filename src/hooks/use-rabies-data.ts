"use client";

import { useEffect, useState } from "react";
import type { CityRabiesData } from "@/data/rabies-data";

export function useRabiesData() {
  const [data, setData] = useState<Record<string, CityRabiesData>>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/rabies", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Risk verileri alınamadı");
        return response.json();
      })
      .then(setData)
      .catch((error) => {
        if (error instanceof Error && error.name !== "AbortError") console.error(error);
      });
    return () => controller.abort();
  }, []);

  return data;
}
