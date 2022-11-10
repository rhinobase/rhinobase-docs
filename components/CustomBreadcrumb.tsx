import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function CustomBreadcrumb() {
  const router = useRouter();
  const link = router.pathname;
  const linkElements = link.split("/").filter((val) => val);
  linkElements.unshift("");
  linkElements.pop();
  
  return (
    <Breadcrumb>
      {linkElements.map((item, index, arr) => {
        const semilink = arr.slice(0, index + 1).join("/");

       return <BreadcrumbItem key={item}>
          <BreadcrumbLink textTransform="capitalize" href={semilink == "" ? "/" : semilink}>
            {item == "" ? "Home" : item}
          </BreadcrumbLink>
        </BreadcrumbItem>
})}
    </Breadcrumb>
  );
}
