import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import OptimizedImage from '../ui/OptimizedImage';
import { Facebook, Twitter, Github, LinkedIn, Magaaazine } from '../ui/Icons';

const AboutSection = component$(() => {
  return (
    <section class="flex justify-center w-full h-screen border-b border-slate-800 bg-accent-2">
      <div class="flex flex-row items-center justify-center w-full max-w-5xl gap-x-10">
        <div class="flex justify-end">
          <OptimizedImage
            classStyle='object-cover rounded-none md:rounded-ss-[5rem] md:rounded-ee-[5rem]'
            src="/images/jeromevillaruel.webp"
            alt="Jerome Villaruel"
            width={400}
            height={400}
          />
        </div>
        <div class="flex flex-col items-start justify-start w-full gap-y-10">
          <div class="flex flex-col">
            <h1 class="font-bold text-2xl">Jerome Villaruel</h1>
            <h2 class="font-light text-base">Software Developer</h2>
          </div>
          <div class="flex w-full">
            👋 Hello, I'm Jerome Villaruel officially known as Veoscript, a software developer based in Philippines specializing in React, NextJS, NestJS, RestAPI, GraphQL, Prisma, Supabase, and PlanetScale.
            I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions.
            Excited to collaborate on innovative projects and contribute to the world of software development.
          </div>
          <div class="flex flex-row items-center w-full space-x-5">
            <Link
              title="Facebook"
              href="https://www.facebook.com/veoscript"
              target="_blank"
            >
              <Facebook />
            </Link>
            <Link
              title="Twitter"
              href="https://twitter.com/veoscript"
              target="_blank"
            >
              <Twitter />
            </Link>
            <Link
              title="GitHub"
              href="https://github.com/veoscript"
              target="_blank"
            >
              <Github />
            </Link>
            <Link
              title="Linked In"
              href="https://www.linkedin.com/in/veoscript/"
              target="_blank"
            >
              <LinkedIn />
            </Link>
            <Link
              title="Magaaazine"
              href="https://www.magaaazine.online/veoscript"
              target="_blank"
            >
              <Magaaazine />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
