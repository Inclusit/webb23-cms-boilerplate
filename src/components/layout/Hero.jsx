import { StoryblokComponent } from "@storyblok/react";
import Btn from "@/components/content-types/Btn";
import Image from "next/image";

export default function Hero({ blok }) {

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-6xl px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-start">
        <div className="flex-1 mb-6 md:mb-0 md:mr-8">
          <div className="pr-0 md:pr-16">
            <div>
              <h1 className="mb-4 text-3xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl">
                {blok.hero_title}
              </h1>
            </div>
            <div>
              <p>{blok.hero_text}</p>
            </div>
          </div>
          <div className="py-4 flex">
            {blok.hero_btn &&
              blok.hero_btn.length > 0 &&
              blok.hero_btn.map((button) => (
                <div
                  className="inline-block mt-4 bg-transparent hover:bg-stone-600 focus:ring-offset-neutral-600 font-semibold hover:text-white py-2 px-4 border border-slate-900 hover:border-transparent rounded"
                  key={button._uid}
                >
                  <Btn blok={button} />
                </div>
              ))}
          </div>
        </div>

        <div className="flex-none w-full md:w-auto">
          {blok.hero_image && blok.hero_image.filename && (
            <Image
              src={blok.hero_image.filename}
              alt={blok.hero_image.alt || "Image"}
              width={364}
              height={371}
              className="object-contain w-full h-auto max-w-xs md:max-w-md"
            />
          )}
        </div>
      </div>
    </div>
  );
}
