import { StoryblokComponent } from "@storyblok/react";

export default function FormWrapper({ blok }) {
  const formFields = blok?.forms || [];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <form className="flex flex-col space-y-4" data-blok-cuid={blok._uid}>
          {blok?.forms?.map((formField) => (
            <div key={formField._uid} className="flex flex-col">
              <label
                htmlFor={formField.self}
                className="text-sm font-medium text-gray-700"
              >
                {formField.name}
              </label>
              <input
                type="text"
                id={formField.self}
                name={formField.self}
                placeholder={formField.placeholder}
                required={formField.required}
                className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-neutral-600"
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-stone-600 text-white p-2 rounded-lg focus:ring-offset-neutral-600 transition duration-300"
          >
            {blok.btn_text}
          </button>
        </form>
      </div>
    </div>
  );
}
