import { StoryblokComponent } from "@storyblok/react";
import RichTextDefault from "../nestable/RichText";
import Image from "next/image";
import Link from "next/link";

export default function TextfieldWLink({ blok }) {
    
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-6xl px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-start">
        <div className="flex-1 mb-6 md:mb-0 md:mr-8">
          <div className="pr-0 md:pr-16">
        
            {blok.text_field.content && (
                <RichTextDefault blok={{ richtext: blok.text_field }} />
            )}

            {blok.link && blok.link.cached_url && blok.link_text && (
              <div className="mt-4">
                <Link href={blok.link.cached_url}>
                  <span className="text-zinc-800 text-opacity-40 text-lg underline">
                    {blok.link_text}
                  </span>
                </Link>
              </div>
            )}
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
