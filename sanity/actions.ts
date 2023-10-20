// import { groq } from "next-sanity";
// import { readClient } from "./lib/client";
// import { buildQuery } from "./utils";

// interface GetCoursesParams {
//   query: string;
//   category: string;
//   page: string;
// }

// export const getCourses = async (params: GetCoursesParams) => {
//   const { query, category, page } = params;

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
//   try {
//     const courses = await readClient.fetch(
//       groq`${buildQuery({
//         type: "courses",
//         query,
//         category,
//         page: parseInt(page),
//       })}{
//         title,
//         _id,
//         purchaseCourse,
//         "image": poster.asset->url,
//         views,
//         slug,
//         category
//       }`
//     );

//     return courses;
//   } catch (error) {
//     console.log(error);
//   }
// };

import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetCoursesParams {
  query: string;
  category: string;
  page: string;
}

export const getCoursesPlaylist = async () => {
  try {
    const courses = await readClient.fetch(
      groq`*[_type == "coursePlaylist"]{
        _id,
        title,
        courses[0...6]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          category
        }
      }`
    );

    return courses;
  } catch (error) {
    console.log(error);
  }
};

export const getCourses = async (params: GetCoursesParams) => {
  const { query, category, page } = params;

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
        downloadLink,
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
