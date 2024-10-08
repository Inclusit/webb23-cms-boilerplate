import { StoryblokComponent } from "@storyblok/react";
import RichTextDefault from "../nestable/RichText";
import Btn from "@/components/content-types/Btn";
import Image from "next/image";

export default function TextfieldWBtn({ blok }) {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-6xl px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-start">
        <div className="flex-1 mb-6 md:mb-0 md:mr-8">
          <div className="pr-0 md:pr-16">
            {blok.text_field && blok.text_field.content && (
              <RichTextDefault blok={{ richtext: blok.text_field }} />
            )}
          </div>
          <div className="py-4 flex">
            {blok.btn &&
              blok.btn.length > 0 &&
              blok.btn.map((button) => (
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
          {blok.image && blok.image.filename && (
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || "Image"}
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
