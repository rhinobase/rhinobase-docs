import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa";

export default function ComunityBanner() {
  return (
    <>
      <div style={{ backgroundColor: "#5865F2" }}>
        <div className="mx-auto max-w-7xl py-8 px-4">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex text-white ">
              <div className="mr-5 flex items-center justify-center text-5xl">
                <FaDiscord />
              </div>
              <div>
                <h2 className="leading[1.2] text-xl font-semibold">
                  Connect with the community
                </h2>
                <p className="text-base opacity-70">
                  Feel free to ask questions, report issues, and meet new
                  people.
                </p>
              </div>
            </div>
            <Link
              href={"https://discord.gg"}
              target="_blank"
              className="mt-6 inline-flex h-[56px] items-center justify-center rounded-md bg-white px-6 text-center font-bold text-gray-800 shadow-md transition-colors hover:bg-default-50 md:mt-0 "
            >
              Join the #rhinobase Discord!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
