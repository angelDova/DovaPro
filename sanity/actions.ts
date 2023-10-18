import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetCoursesParams {
  query: string;
  category: string;
  page: string;
}

export const getCourses = async (params: GetCoursesParams) => {
  const { query, category, page } = params;

  // try {
  //   const courses = await readClient.fetch(
  //     groq`${buildQuery({
  //       type: "courses",
  //       query,
  //       category,
  //       page: parseInt(page),
  //     })}{
  //       title,
  //       _id,
  //       purchaseCourse,
  //       "image": poster.asset->url,
  //       views,
  //       slug,
  //       category,
  //     }`
  //   );
  try {
    const courses = await readClient.fetch(
      groq`${buildQuery({
        type: "courses",
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        purchaseCourse,
        "image": poster.asset->url,
        views,
        slug,
        category
      }`
    );

    return courses;
  } catch (error) {
    console.log(error);
  }
};
