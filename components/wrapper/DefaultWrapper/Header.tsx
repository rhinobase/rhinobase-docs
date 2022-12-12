import FullLogo from "components/brand/FullLogo";
import { FaGithub, FaDiscord, FaYoutube, FaBars } from "react-icons/fa";
import { HiMoon, HiSun, HiXMark } from "react-icons/hi2";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { classNames } from "utils/className";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Sidebar } from "../Sidebar";

import sitemap from "sitemap.json";
import { ColorMode, useColorMode } from "providers/colorMode";

export default function Header() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { mode, toggleColorMode } = useColorMode();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.pageYOffset > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Popover className="relative bg-white">
        <div
          className={classNames(
            show ? "shadow-md" : "",
            router.pathname == "/" && !show
              ? "bg-gray-100 dark:bg-gray-700"
              : "bg-gray-100 dark:bg-gray-800",
            "fixed z-[100] w-full text-gray-800 transition delay-[0s] duration-[.1s] ease-in-out dark:text-white",
          )}
        >
          <div className="flex flex-row items-center p-2">
            <Link href="/">
              <FullLogo />
            </Link>
            <div className="mr-2 flex-[1] justify-items-stretch"></div>
            <div className="mr-2 hidden md:block ">
              <Link href="/articles">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-transparent px-4 py-1 text-base font-semibold hover:bg-gray-200 focus:outline-none dark:hover:bg-gray-600"
                >
                  Article
                </button>
              </Link>
              <Link href="/quickstart">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-transparent px-4 py-1 text-base font-semibold  hover:bg-gray-200 focus:outline-none  dark:hover:bg-gray-600"
                >
                  Quickstarts
                </button>
              </Link>
              <Link href="/apis">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-transparent px-4 py-1 text-base font-semibold  hover:bg-gray-200 focus:outline-none  dark:hover:bg-gray-600"
                >
                  APIs
                </button>
              </Link>
              <Link href="/sdks">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-transparent px-4 py-1 text-base font-semibold  hover:bg-gray-200 focus:outline-none  dark:hover:bg-gray-600"
                >
                  SDKs
                </button>
              </Link>
            </div>
            <div className="hidden gap-2 sm:flex ">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-transparent px-2 py-1 text-sm font-medium hover:bg-gray-200 focus:outline-none  dark:hover:bg-gray-600"
              >
                <Link href="">
                  <FaGithub size="24px" />
                </Link>
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-transparent px-2 py-1 text-sm font-medium hover:bg-gray-200 focus:outline-none  dark:hover:bg-gray-600"
              >
                <Link href="">
                  <FaDiscord size="24px" />
                </Link>
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-transparent px-2 py-1 text-sm font-medium hover:bg-gray-200 focus:outline-none  dark:hover:bg-gray-600"
              >
                <Link href="">
                  <FaYoutube size="24px" />
                </Link>
              </button>
            </div>
            <button
              type="button"
              className="mx-2 inline-flex items-center rounded-md border border-transparent bg-transparent px-2 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none  dark:hover:bg-gray-600"
              onClick={toggleColorMode}
            >
              {mode == ColorMode.LIGHT ? (
                <HiMoon size="20px" />
              ) : (
                <HiSun size="20px" />
              )}
            </button>

            <button
              className="mx-2 inline-flex items-center rounded-md border border-transparent bg-transparent px-2 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none  dark:hover:bg-gray-600 sm:block md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars size="16px" />
            </button>

            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-[110] md:hidden"
                onClose={setSidebarOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4 dark:bg-gray-700 dark:text-white">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                          <button
                            type="button"
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="sr-only">Close sidebar</span>
                            <HiXMark
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex flex-shrink-0 items-center px-4">
                        <Link href="/">
                          <FullLogo />
                        </Link>
                        {/* <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                      alt="Your Company"
                    /> */}
                      </div>
                      <div className="mt-5 h-0 flex-1 overflow-y-auto">
                        <div className=""></div>
                        <nav className="space-y-2">
                          <Sidebar options={sitemap} />
                          {/* <div className="border-b border-gray-200 dark:border-gray-500"></div> */}
                          <div className="flex flex-col space-y-2 px-2 py-3">
                            <Link
                              href=""
                              className="inline-flex h-10 items-center rounded-md px-4 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              <FaGithub size="16px" />
                              <span className="ml-3">Github</span>
                            </Link>
                            <Link
                              href=""
                              className="inline-flex h-10 items-center rounded-md px-4 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              <FaDiscord size="16px" />
                              <span className="ml-3">Discord</span>
                            </Link>
                            <Link
                              href=""
                              className="inline-flex h-10 items-center rounded-md px-4 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              <FaYoutube size="16px" />
                              <span className="ml-3">Youtube</span>
                            </Link>
                          </div>
                          {/* {navigation.map((item) => (
                            <Link href={item.href}>
                            <button
                              type="button"
                              className="inline-flex items-center rounded-md border border-transparent bg-transparent px-4 py-2 text-md font-medium hover:bg-gray-700 hover:text-white focus:outline-none"
                            >
                              Article
                            </button>
                          </Link>
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                          {item.name}
                        </a>
                      ))} */}
                        </nav>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                  <div className="w-14 flex-shrink-0" aria-hidden="true">
                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
        </div>
      </Popover>
    </>
  );
}
