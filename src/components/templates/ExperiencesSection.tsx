import { component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { experiences } from '~/shared/mocks/experiences';
import type { IExperience } from '~/shared/interfaces';

const ExperiencesSection = component$(() => {
  const experiencesList = useSignal(experiences);

  return (
    <section class="flex justify-center w-full h-full py-20 border-b border-slate-800 bg-accent-2">
      <div class="flex flex-col items-center justify-center w-full max-w-5xl gap-y-[8rem]">
        <h1 class="font-rock_salt font-bold text-5xl text-accent-3">Experiences</h1>
        <div class="flex flex-row items-start justify-between w-full gap-x-10">
          <ol class="relative border-s border-slate-800">
            {experiencesList.value.map((experience: IExperience, key: number) => (
              <li key={key} class="flex flex-col items-start mb-10 ms-5 gap-y-3">
                <div class="absolute w-3 h-3 bg-accent-3 rounded-full mt-1.5 -start-1.5 border border-accent-3" />
                <time class="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">{experience.experienceDate}</time>
                <h3 class="text-lg font-semibold text-accent-4">{experience.company}</h3>
                <p class="mb-4 text-base font-normal text-slate-500">{experience.description}</p>
                <Link href={experience.link} target="_blank" class="default-btn px-5 py-3 text-sm bg-accent-1">
                  Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
});

export default ExperiencesSection;
