import { StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import RichTextDefault from "../nestable/RichText";

export default function ImageGallery({ blok }) {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg ">
      <div className="flex space-x-20">
        {blok.images.map((imageBlock) => (
          <div key={imageBlock._uid} className="flex flex-col items-center">
            <Image
              src={imageBlock.image.filename}
              alt={imageBlock.image.alt || "Image"}
              width={256} 
              height={256} 
              className="object-cover rounded-lg border border-gray-300 shadow-lg"
            />
            {imageBlock.caption && (
              <RichTextDefault blok={{ richtext: imageBlock.caption }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
