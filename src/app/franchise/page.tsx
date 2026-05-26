import type { Metadata } from "next";
import Franchise from "@/components/Franchise";

export const metadata: Metadata = {
  title: "KAKU — Franchise",
  description:
    "Open the next city with KAKU. Pressed sushi × health × luxury, standardised for international franchise: recipes, fixtures, SOPs, training and supply.",
};

export default function FranchisePage() {
  return <Franchise />;
}
