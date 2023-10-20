import CourseCard from "@/components/course-card";
import Filters from "@/components/filters";
import Header from "@/components/header";
import SearchForm from "@/components/search-form";
import { Button } from "@/components/ui/button";
import { getCourses } from "@/sanity/actions";
import Image from "next/image";

// import { readClient } from "@/sanity/lib/client";
// import { buildQuery } from "@/sanity/utils";
// import { groq } from "next-sanity";

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  const courses = await getCourses({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });
  console.log(courses);

  // interface getCoursesParams {
  //   searchParams: { [key: string]: string | undefined };
  // }

  // export const getCourses = async (params: getCoursesParams) => {
  //   const { query, category, page } = params;

  //   try {
  //     console.log("Querying courses with params:", params);

  //     const courses = await readClient.fetch(
  //       groq`${buildQuery({
  //         type: "courses",
  //         query,
  //         category,
  //         page: parseInt(page),
  //       })}{
  //         title,
  //         _id,
  //         downloadLink,
  //         "image": poster.asset->url,
  //         views,
  //         slug,
  //         category
  //       }`
  //     );

  //     console.log("Received courses:", courses);

  //     return courses;
  //   } catch (error) {
  //     console.error("Error fetching courses:", error);
  //     return []; // Return an empty array in case of an error.
  //   }
  // };

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white"></h1>
        </div>
        <SearchForm />
      </section>
      <Filters />

      <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        <Header />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {courses?.length > 0 ? (
            courses.map((courses: any) => (
              <CourseCard
                key={courses._id}
                title={courses.title}
                id={courses._id}
                image={courses.image}
                purchaseCourse={courses.views}
                downloadLink={courses.downloadLink}
              />
            ))
          ) : (
            <p className="body-regular text-white-400">No Courses Found 🧐</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;
