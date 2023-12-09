import { component$ } from '@builder.io/qwik';

import OptimizedImage from '../ui/OptimizedImage';

const SkillsServicesSection = component$(() => {
  return (
    <section class="flex justify-center w-full h-screen border-b border-slate-800 bg-accent-1">
      <div class="flex flex-col items-center justify-center w-full max-w-5xl gap-y-[8rem]">
        <h1 class="font-rock_salt font-bold text-5xl text-accent-3">Skills & Services</h1>
        <div class="flex flex-row items-start justify-between w-full gap-x-10">
          <div class="flex flex-col items-center w-full gap-y-3">
            <OptimizedImage
              classStyle='object-cover'
              src="/images/icons/image2.webp"
              alt="Custom Icon"
              width={110}
              height={110}
            />
            <h1 class="font-bold text-2xl">Web Development</h1>
            <p class="font-light text-sm text-left">
              Consider as a full-stack developer using Git, NextJS, NuxtJS, NestJS, Prisma,
              PostgreSQL, MySQL, MSSQL, PlanetScale, GraphQL and REST-API.
            </p>
          </div>
          <div class="flex flex-col items-center w-full gap-y-3">
            <OptimizedImage
              classStyle='object-cover'
              src="/images/icons/image1.webp"
              alt="Custom Icon"
              width={110}
              height={110}
            />
            <h1 class="font-bold text-2xl">Software Development</h1>
            <p class="font-light text-sm text-left">
              Can create desktop applications using Tauri, Electron, and C# WFA.
              Mobile applications both iOS & Android using React Native and Ionic.
            </p>
          </div>
          <div class="flex flex-col items-center w-full gap-y-3">
            <OptimizedImage
              classStyle='object-cover'
              src="/images/icons/image4.webp"
              alt="Custom Icon"
              width={110}
              height={110}
            />
            <h1 class="font-bold text-2xl">I.T. Networking</h1>
            <p class="font-light text-sm text-left">
              Handle network topology, network security, microservices, database administrator and local area network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SkillsServicesSection;
