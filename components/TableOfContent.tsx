import React from "react";
import getTableOfContent from "utils/getTableOfContent";

export type TableOfContentProps = {
  title: string;
  id: string;
  item?: TableOfContentProps[];
};

const source = `
# Hello People (h1)

## My name is (h2)

Aditya Mathur

### Heading 3 (h2)
`;

// [
//   {
//     title: "Hello People (h1)",
//     id: "asdf",
//     level: 1,
//   },
//   {
//     title: "My name is (h2)",
//     id: "asdfgg",
//     level: 2,
//   },
// ];

export default function TableOfContent() {
  console.log(getTableOfContent(source));

  return <div>TableOfContent</div>;
}
