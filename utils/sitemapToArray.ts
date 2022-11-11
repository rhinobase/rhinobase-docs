import { SidebarNestedType } from "components/wrapper/Sidebar";

export default function sitemapToArray(items: SidebarNestedType[]): string[] {
  const links = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.href) links.push(item.href);
    else if (item.items) links.push(...sitemapToArray(item.items));
  }

  return links;
}
