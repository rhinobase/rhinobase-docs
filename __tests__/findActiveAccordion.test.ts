import findActiveAccordion from "../utils/findActiveAccordion";

describe("finding active button in sidebar", () => {
  const options = [
    {
      title: "Simple heading",
      href: "/simple/1",
    },
    {
      title: "Nested heading",
      items: [
        { title: "heading 1", href: "/nested/1" },
        { title: "heading 2", href: "/nested/2" },
      ],
    },
    {
      title: "A bit harder nesting",
      items: [
        { title: "heading 1", href: "/harder/1" },
        {
          title: "heading 2",
          items: [{ title: "heading 1", href: "/harder/2/1" }],
        },
      ],
    },
    {
      title: "Hard nesting",
      items: [
        { title: "heading 1", href: "/hard/1" },
        {
          title: "heading 2",
          items: [
            { title: "heading 1", href: "/hard/2/0" },
            {
              title: "heading 1",
              items: [{ title: "somethin 1", href: "/hard/2/1/0" }],
            },
          ],
        },
      ],
    },
  ];

  test("no nesting", () => {
    expect(findActiveAccordion(options, "/simple/1")).toEqual([0]);
  });

  test("level 1 nesting", () => {
    expect(findActiveAccordion(options, "/nested/2")).toEqual([1, 1]);
  });

  test("level 2 nesting", () => {
    expect(findActiveAccordion(options, "/harder/2/1")).toEqual([2, 1, 0]);
  });

  test("level 3 nesting", () => {
    expect(findActiveAccordion(options, "/hard/2/1/0")).toEqual([3, 1, 1, 0]);
  });
});
