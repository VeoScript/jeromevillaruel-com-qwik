import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

const MainBanner = component$(() => {
  return (
    <section class="flex flex-col items-center justify-center w-full h-screen gap-y-10 border-b border-slate-800 bg-accent-1">
      <div class="flex justify-center w-full">
        <h1 class="font-rock_salt font-bold text-5xl">
          <span class="text-accent-3">Veo</span>
          <span class="text-accent-4">Script</span>
        </h1>
      </div>
      <div class="flex justify-center w-full">
        <h2 class="font-bold text-5xl text-center">The Odyssey of a Full-Stack Developer</h2>
      </div>
      <div class="flex justify-center w-full max-w-xl">
        <h3 class="font-light text-xl text-center">"Let's keep it simple and focus on what matters. Don't let yourself be overwhelmed." - Confucius</h3>
      </div>
      <Link
        class="default-btn px-5 py-3 text-base bg-accent-2"
        title="Hire Me"
        href="/files/jeromevillaruel.pdf"
        target="_blank"
      >
        👋 Hire Me!
      </Link>
    </section>
  );
});

export default MainBanner;
