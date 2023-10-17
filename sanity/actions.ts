import { groq } from "next-sanity";
import { readClient } from "./lib/client";

interface GetCoursesParams {
  query: string;
  category: string;
  page: string;
}

export const getCourses = async (params: GetCoursesParams) => {
  const { query, category, page } = params;

  try {
    const courses = await readClient.fetch(groq``);
  } catch (error) {}
};
