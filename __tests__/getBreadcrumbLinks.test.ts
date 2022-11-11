import getBreadcrumbLinks from "../utils/getBreadcrumbLinks";

describe("Getting the breadcrumbs for a link", () => {
  test("simple", () => {
    expect(getBreadcrumbLinks("/simple/1")).toEqual([
      { title: "home", href: "/" },
      { title: "simple", href: "/simple" },
    ]);
  });
});
