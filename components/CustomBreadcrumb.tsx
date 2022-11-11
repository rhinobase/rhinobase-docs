import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function getBreadcrumbLinks(href: string) {
  const items = href.split("/").filter((val) => val);
  items.unshift("");
  items.pop();

  return items.map((item, index, arr) => {
    const tmp = arr.slice(0, index + 1).join("/");

    return {
      href: tmp ?? "/",
      title: item ?? "home",
    };
  });
}

export default function CustomBreadcrumb() {
  const router = useRouter();
  const items = getBreadcrumbLinks(router.pathname);

  return (
    <Breadcrumb>
      {items.map((item) => {
        return (
          <BreadcrumbItem key={item.title}>
            <BreadcrumbLink textTransform="capitalize" href={item.href}>
              {item.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
