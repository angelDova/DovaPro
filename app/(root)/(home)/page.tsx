import CourseCard from "@/components/course-card";
import Filters from "@/components/filters";
import Header from "@/components/header";
import SearchForm from "@/components/search-form";
import { Button } from "@/components/ui/button";
import { getCourses } from "@/sanity/actions";
import Image from "next/image";

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  console.log(searchParams);

  const courses = await getCourses({
    query: "",
    category: "",
    page: "1",
  });

  console.log(courses);

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
            courses.map((course: any) => (
              <CourseCard
                key={course._id}
                title={course.title}
                id={course._id}
                image={course.image}
                purchaseCourse={course.views}
                // downloadLink={course.downloadLink}
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
