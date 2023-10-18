const schema = {
  name: "coursePlaylist",
  title: "Course Playlist",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "courses",
      title: "Course",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "courses" }],
        },
      ],
    },
  ],
};

export default schema;

// const schema = {
//   name: "resourcePlaylist",
//   title: "Resource Playlist",
//   type: "document",
//   fields: [
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//       validation: (Rule: any) => Rule.required(),
//     },
//     {
//       name: "resources",
//       title: "Resources",
//       type: "array",
//       of: [
//         {
//           type: "reference",
//           to: [{ type: "resource" }],
//         },
//       ],
//     },
//   ],
// };

// export default schema;
