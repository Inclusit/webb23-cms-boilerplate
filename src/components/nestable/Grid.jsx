import { StoryblokComponent } from "@storyblok/react";

export default function Grid({ blok }) {
  return (
    <div className="flex flex-wrap justify-center space-x-24">
      
      {blok.images.map((imageBlock) => (
        <div key={imageBlock._uid} className="flex flex-col items-center">
         
          <StoryblokComponent blok={imageBlock} />
        
        </div>
      ))}
    </div>
  );
}
