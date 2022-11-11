import { SidebarNestedType } from "components/wrapper/Sidebar";

export default function findActiveAccordion(
  items: SidebarNestedType[],
  route: string,
): number[] | undefined {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.href && item.href == route) return [i];
    else if (item.items) {
      const result = findActiveAccordion(item.items, route);
      if (result) {
        result.unshift(i);
        return result;
      }
    }
  }
}
