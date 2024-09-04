import { StoryblokComponent } from "@storyblok/react";

export default function Grid({ blok }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blok?.columns?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </section>
  );
}