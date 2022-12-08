import { Text, Container, Heading, Box, chakra, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa";

export default function ComunityBanner() {
  return (
    <>
      <div style={{ backgroundColor: "#5865F2" }}>
        <div className="container m-auto py-8 px-4">
          <div className="flex justify-between sm:flex-col md:flex-row">
            <div className="flex text-white ">
              <div className="mr-5 flex items-center justify-center text-5xl">
                <FaDiscord />
              </div>
              <div>
                <h2 className="leading[1.2] text-xl font-medium">
                  Connect with the community
                </h2>
                <p className="opacity-70">
                  Feel free to ask questions, report issues, and meet new
                  people.
                </p>
              </div>
            </div>
            <Link
              href={"https://discord.gg"}
              target="_blank"
              className="inline-flex h-[56px] items-center rounded-md bg-white px-6 font-bold text-gray-800 shadow-md"
            >
              Join the #rhinobase Discord!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
