const schema = {
  name: "courses",
  title: "Courses",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule: any) => Rule.required(),
    },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    {
      name: "purchaseCourse",
      title: "Purchase Course",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      option: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          "Art of the Triangle",
          "Guillotine Mastery",
          "Coach, What Do I Do From 50/50?",
          "All Aspects of the Armbar",
          "All Access Dojo Membership/Month",
          "All Access Dojo Membership/Year",
        ],
      },
    },
  ],
};

export default schema;

// const schema = {
//   name: "resource",
//   title: "Resource",
//   type: "document",
//   fields: [
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//       require,
//       validation: (Rule: any) => Rule.required(),
//     },
//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: { source: "title" },
//     },
//     {
//       name: "downloadLink",
//       title: "Download Link",
//       type: "url",
//       validation: (Rule: any) => Rule.required(),
//     },
//     {
//       name: "views",
//       title: "Views",
//       type: "number",
//       initialValue: 0,
//     },
//     {
//       name: "poster",
//       title: "Poster",
//       type: "image",
//       validation: (Rule: any) => Rule.required(),
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: "category",
//       title: "Category",
//       type: "string",
//       validation: (Rule: any) => Rule.required(),
//       options: {
//         list: ["frontend", "backend", "next 13", "fullstack", "other"],
//       },
//     },
//   ],
// };

// export default schema;
