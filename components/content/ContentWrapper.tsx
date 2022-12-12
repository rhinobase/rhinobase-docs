// import { Button, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type ContentWrapperProps = {
  children: JSX.Element;
  title: string;
  href: string;
};

export default function ContentWrapper(props: ContentWrapperProps) {
  return (
    <>
      <div className="mt-20 mb-5 flex items-start align-middle">
        <h2 className="text-2xl font-semibold md:text-3xl">{props.title}</h2>
        <div className="flex-1"></div>
        <Link
          href={props.href}
          className="hidden rounded-md transition-all hover:bg-default-50 dark:hover:bg-gray-700 md:block"
        >
          <button
            type="button"
            className="flex items-center px-4 py-2 align-middle text-base font-semibold text-default-200"
          >
            learn more
            <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
      {props.children}
      <div className="flex items-end justify-end md:hidden">
        <Link
          href={props.href}
          className="rounded-md transition-all hover:bg-default-50 dark:hover:bg-gray-700"
        >
          <button
            type="button"
            className="flex items-center  px-4 py-2 align-middle text-base font-semibold text-default-300"
          >
            learn more
            <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </>
  );
}
