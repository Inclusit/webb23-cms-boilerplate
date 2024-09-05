/* import { StoryblokCMS } from "@/utils/cms"

export default async function NotFound() {

    try {
    const {
      content: { notfound_title, notfound_description },
    } = await StoryblokCMS.getConfig();

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
          <div>
            <h1 className="text-lg font-bold mt-4 text-center">
              {notfound_title}
            </h1>

            <p className="py-2 text-center">
                {notfound_description}
            </p>
          </div>
        </div>
      </div>
    );
    } catch (error) {
        console.error(error)
    }
} */
"use client";
import { StoryblokCMS } from "@/utils/cms";
export default function NotFound() {
  /*     try {
    const currentStory = await StoryblokCMS.getConfig();
    const { notfound_title, notfound_description } = currentStory.content;
    if (!currentStory) throw new Error();
    {console.log(notfound_title)}
    {console.log(notfound_description)}
    return (
        <div>
        <h1>{notfound_title}</h1>
        <p>Page not found</p>
        </div>
    );
    } catch (error) {
    console.error(error);
    } */
  return <div></div>;
}
