import { slug } from "github-slugger";

export default function getTableOfContent(mdxContent: string) {
  const regex = new RegExp(/^(### )(.*)\n/, "gm");
  const headings = Array.from(mdxContent.matchAll(regex));
  const tableOfContent: { text: string; id: string; level: number }[] = [];

  if (headings.length)
    headings.forEach((heading) => {
      const headingText = heading[2].trim();
      const headingType = heading[1].trim().length;
      const headingLink = slug(headingText);

      tableOfContent.push({
        id: headingLink,
        text: headingText,
        level: headingType,
      });
    });

  return tableOfContent;
}
