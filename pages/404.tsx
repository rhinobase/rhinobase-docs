// import { Heading, Text, VStack, Container, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaQuestion } from "react-icons/fa";
import { HiExclamationTriangle } from "react-icons/hi2";

export default function NotFound() {
  return (
    <>
      <div className="container m-auto h-[600px] max-w-7xl">
        <div className="flex h-full flex-col items-center justify-center space-y-5">
          <HiExclamationTriangle className="h-16 w-16 text-red-500" />
          <h1 className="text-xl text-red-500">404 ERROR</h1>
          <p className="text-lg">
            We could not find the page you were looking for.
          </p>
          <p className="text-center text-xl">
            You may have mistyped the address or the page was moved or deleted.
            <br />
            You can search for more results or head to our{" "}
            <Link href="/">
              <button className="text-xl text-blue-600">homepage.</button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
