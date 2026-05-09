"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const BLUR_FADE_DELAY = 0.04;
const INITIAL_PROJECTS_COUNT = 4;

// Mapping function to get translation key from project title
const getProjectKey = (title: string): keyof typeof translations.id.projectDescriptions => {
  const keyMap: Record<string, keyof typeof translations.id.projectDescriptions> = {
    "Flut Apps - Hiring Job Platform": "flut",
    "Roconal E-Commerce Platform": "roconal",
    "Adibayu Group Company Profile": "adibayuGroup",
    "Mosque Management System": "mosque",
    "Azhar Material Digital Platform": "azhar",
    "Adibayu Project Management System": "adibayuPms",
    "Material Distribution POS System": "pos",
    "Sales Analytics Dashboard": "salesDashboard",
    "Professional Developer Portfolio": "portfolio",
    "Aksamala Verification": "aksamala",
  };
  return keyMap[title] || "portfolio"; // Default to portfolio if not found
};

export default function ProjectsSection() {
    const { t, language } = useLanguage();
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll
        ? DATA.projects
        : DATA.projects.slice(0, INITIAL_PROJECTS_COUNT);

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">{t.projects.title}</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl">{t.projects.subtitle}</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            {t.projects.description}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
                    {displayedProjects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={"href" in project ? project.href : undefined}
                                key={project.title}
                                title={project.title}
                                description={translations[language].projectDescriptions[getProjectKey(project.title)]}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={"links" in project ? project.links : undefined}
                            />
                        </BlurFade>
                    ))}
                </div>
                {DATA.projects.length > INITIAL_PROJECTS_COUNT && (
                    <BlurFade delay={BLUR_FADE_DELAY * 12 + displayedProjects.length * 0.05}>
                        <div className="flex justify-center mt-4">
                            <Button
                                onClick={() => setShowAll(!showAll)}
                                variant="outline"
                                size="lg"
                                className="rounded-full"
                            >
                                {showAll ? t.projects.showLess : `${t.projects.loadMore} (${DATA.projects.length - INITIAL_PROJECTS_COUNT} ${t.projects.moreProjects})`}
                            </Button>
                        </div>
                    </BlurFade>
                )}
            </div>
        </section>
    );
}
