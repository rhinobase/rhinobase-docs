// import {
//   Box,
//   ListItem,
//   Text,
//   UnorderedList,
//   useBreakpointValue,
//   VStack,
// } from "@chakra-ui/react";
import { useScrollSpy } from "hooks/useScrollspy";
import Link from "next/link";
import { classNames } from "utils/className";

type TableOfContentProps = {
  headings: {
    text: string;
    id: string;
    level: number;
  }[];
};

export default function TableOfContent(props: TableOfContentProps) {
  const activeId = useScrollSpy(props.headings.map(({ id }) => `[id="${id}"]`));
  // const show = useBreakpointValue({ base: true, lg: false });
  return (
    <>
      <div className="ml-5 grid grid-cols-1 gap-2">
        {props.headings.map((value) => (
          <Link key={value.id} href={`#${value.id}`}>
            <p
              className={classNames(
                activeId == value.id
                  ? "font-[700] text-blue-500"
                  : "font-[500]",
              )}
            >
              {value.text}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
