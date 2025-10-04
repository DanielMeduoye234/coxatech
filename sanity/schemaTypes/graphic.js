// sanity/schemaTypes/graphics.js
export default {
  name: "graphic",
  title: "Graphics",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
};
