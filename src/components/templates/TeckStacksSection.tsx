import { component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import OptimizedImage from '../ui/OptimizedImage';

import { techstacks } from '~/shared/mocks/techstacks';
import type { ITechStacks } from '~/shared/interfaces';

const TeckStacksSection = component$(() => {
  const techStacksList = useSignal(techstacks);

  return (
    <section class="flex justify-center w-full h-screen py-20 border-b border-slate-800 bg-accent-1">
      <div class="flex flex-col items-center justify-center w-full max-w-5xl gap-y-[8rem]">
        <h1 class="font-rock_salt font-bold text-5xl text-accent-3">Tech Stacks</h1>
        <div class="flex flex-wrap items-center justify-center w-full max-w-full gap-10">
          {techStacksList.value.map((techstack: ITechStacks, index: number) => (
            <Link
              key={index}
              href={techstack.link}
              target="_blank"
              class="transition ease-in-out duration-200 transform hover:scale-110"
            >
              <OptimizedImage
                classStyle='object-cover'
                src={techstack.icon}
                alt={techstack.name}
                width={100}
                height={100}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TeckStacksSection;
