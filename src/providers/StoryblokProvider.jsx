//src/app/providers/StoryblokProvider.jsx

"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
import Header from "@/components/layout/Header";
import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import TextfieldWBtn from "@/components/content-types/TextfieldWBtn";
import TextfieldWLink from "@/components/content-types/TextfieldWLink";
import Btn from "@/components/content-types/Btn";
import FormWrapper from "@/components/nestable/FormWrapper";
import Hero from "@/components/layout/Hero";
import ImageWithText from "@/components/content-types/ImageWithText";
import Grid from "@/components/nestable/Grid";


const components = {
  page: Page,
  teaser: Teaser,
  richtext: RichTextDefault,
  header: Header,
  text_field_w_btn: TextfieldWBtn,
  text_field_w_link: TextfieldWLink,
  btn: Btn,
  form_wrapper: FormWrapper,
  hero: Hero,
  Grid: Grid,
  ImageWithText: ImageWithText,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
