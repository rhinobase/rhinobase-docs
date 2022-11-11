export default function getBreadcrumbLinks(href: string) {
  const items = href.split("/").filter((val) => val);
  items.unshift("");
  items.pop();

  return items.map((item, index, arr) => {
    const tmp: string = arr.slice(0, index + 1).join("/");

    return {
      href: tmp == "" ? "/" : tmp,
      title: item == "" ? "home" : item,
    };
  });
}
