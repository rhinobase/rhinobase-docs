import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import getBreadcrumbLinks from "utils/getBreadcrumbLinks";

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
