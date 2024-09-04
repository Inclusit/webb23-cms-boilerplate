import { StoryblokComponent } from "@storyblok/react/rsc";

export default function Btn({ blok }) {
  return (
    <button data-blok-cuid={blok._uid}>
      {blok.btn_text}
    </button>
  );
}
