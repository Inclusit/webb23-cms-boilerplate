import Image from "next/image";
import RichTextDefault from "../nestable/RichText";

export default function ImageWithText({ blok }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={blok.image.filename}
        alt={blok.image.alt || "Image"}
        width={200}
        height={200}
        className="object-cover rounded-lg border border-gray-300 shadow-lg mx-auto" // Lägg till mx-auto
      />
      <h2 className="text-lg font-bold mt-4 text-center">{blok.Title}</h2>
      <div className="py-2 text-center">
        {blok.text && <RichTextDefault blok={{ richtext: blok.text }} />}
      </div>
    </div>
  );
}
