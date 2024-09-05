import { StoryblokComponent } from "@storyblok/react";

export default function Grid({ blok }) {
  return (
    <div className="flex flex-wrap justify-center sm:space-x-3 md:space-x-6 lg:space-x-24">
      {blok.images.map((imageBlock) => (
        <div
          key={imageBlock._uid}
          className="flex-shrink-0 flex flex-col items-center"
        >
          <StoryblokComponent blok={imageBlock} />
        </div>
      ))}
    </div>
  );
}
