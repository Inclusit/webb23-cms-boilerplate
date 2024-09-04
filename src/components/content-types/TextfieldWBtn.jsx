import { StoryblokComponent } from "@storyblok/react";
import RichTextDefault from "../nestable/RichText";
import Btn from "@/components/content-types/Btn";
import Image from "next/image";

export default function TextfieldWBtn({ blok }) {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-6xl px-12 flex items-center">
        <div className="flex-1 pr-16">
          {blok.text_field && blok.text_field.content && (
            <RichTextDefault blok={{ richtext: blok.text_field }} />
          )}
          {blok.btn &&
            blok.btn.length > 0 &&
            blok.btn.map((button) => (
              <div
                className="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                key={button._uid}
              >
                <Btn blok={button} />
              </div>
            ))}
        </div>

        <div className="flex-none">
          {blok.image && blok.image.filename && (
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || "Image"}
              width={364}
              height={371}
              className="object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}
