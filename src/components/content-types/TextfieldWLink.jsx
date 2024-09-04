import { StoryblokComponent } from "@storyblok/react";
import RichTextDefault from "../nestable/RichText";
import Image from "next/image";
import Link from "next/link";

export default function TextfieldWLink({ blok }) {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-6xl px-12 flex items-center">
        <div className="flex-1 pr-16">
          {blok.text_field && blok.text_field.content && (
            <RichTextDefault blok={{ richtext: blok.text_field }} />
          )}

          {blok.link && blok.link.cached_url && blok.link_text && (
            <div className="mt-4">
              <Link href={blok.link.cached_url}>
                <span className="text-blue-500 underline">
                  {blok.link_text}
                </span>
              </Link>
            </div>
          )}
        </div>

        <div className="flex-none">
          {blok.image && blok.image.filename && (
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || "Image"}
              width={364} 
              height={371} 
              className="object-contain" //  w-full h-auto Gör att bilden fyller sin behållare
            />
          )}
        </div>
      </div>
    </div>
  );
}
