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
        <h2 className="text-3xl font-semibold">{props.title}</h2>
        <div className="flex-1"></div>
        <Link
          href={props.href}
          className="rounded-md transition-all hover:bg-blue-200"
        >
          <button
            type="button"
            className="flex items-center px-4 py-2 align-middle text-base font-semibold text-blue-500"
          >
            learn more
            <span className="ml-2">
              <FaArrowRight />
            </span>
          </button>
        </Link>
      </div>
      {props.children}
    </>
  );
}
