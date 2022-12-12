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
      <div className="ml-5 mt-5 hidden space-y-2 lg:block">
        {props.headings.map((value) => (
          <Link key={value.id} href={`#${value.id}`}>
            <p
              className={classNames(
                activeId == value.id
                  ? "font-semibold text-default-500 dark:text-default-300 "
                  : "font-medium",
              )}
            >
              {value.text}
            </p>
          </Link>
        ))}
      </div>
      <div className="py-3">
        <ul className="ml-8 flex list-outside list-disc flex-col gap-2 lg:hidden">
          {props.headings.map((value) => (
            <li key={value.id}>
              <Link
                href={`#${value.id}`}
                className={classNames(
                  activeId == value.id ? "font-[500]" : "font-[500]",
                )}
              >
                {value.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
