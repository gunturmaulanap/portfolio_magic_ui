import type { Metadata } from "next";
import PageContent from "@/components/page-content";

export const metadata: Metadata = {
  title: "Portfolio | Adi Bayu",
  description:
    "Personal portfolio showcasing projects, work experience, skills, and contact information.",
};

export default function Page() {
  return <PageContent />;
}
