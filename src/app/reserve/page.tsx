import type { Metadata } from "next";
import Reserve from "@/components/Reserve";

export const metadata: Metadata = {
  title: "KAKU — Reservation",
  description:
    "Reserve your KAKU box ahead of time. Pick your store, time and set — skip the queue. Singapore & Kuala Lumpur.",
};

export default function ReservePage() {
  return <Reserve />;
}
