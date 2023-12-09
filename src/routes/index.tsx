import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import MainBanner from "~/components/templates/MainBanner";
import AboutSection from "~/components/templates/AboutSection";
import SkillsServicesSection from "~/components/templates/SkillsServicesSection";
import ExperiencesSection from "~/components/templates/ExperiencesSection";
import TeckStacksSection from "~/components/templates/TeckStacksSection";

export default component$(() => {
  return (
    <main class="font-prompt flex flex-col w-full h-full text-white bg-accent-1">
      <MainBanner />
      <AboutSection />
      <SkillsServicesSection />
      <ExperiencesSection />
      <TeckStacksSection />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Jerome Villaruel",
  meta: [
    {
      name: "description",
      content: "Official website of Jerome Villaruel (VEOSCRIPT)",
    },
  ],
};
