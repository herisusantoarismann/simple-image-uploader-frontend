import type { LoadEvent } from "@sveltejs/kit";

export const load = async ({ params }: LoadEvent) => {
  let data;
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/${params?.slug}`
  )
    .then((res) => res.json())
    .then((res) => {
      data = res?.data;
    });

  return data;
};
