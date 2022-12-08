import FullLogo from "components/brand/FullLogo";
import { FaGithub, FaDiscord, FaYoutube, FaBars, FaMoon } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { classNames } from "utils/className";
import { toggleColorMode } from "utils/colorMode";
import { Dialog, Popover, Transition } from "@headlessui/react";

const navigation = [
  { name: "Article", href: "/articles", icon: "HomeIcon", current: true },
  {
    name: "Quickstart",
    href: "/quickstart",
    icon: "UsersIcon",
    current: false,
  },
  { name: "APIs", href: "/apis", icon: "FolderIcon", current: false },
  { name: "SDKs", href: "/sdks", icon: "CalendarIcon", current: false },
];

export default function Header() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // const onOpen = () => setIsOpen(true);
  // const onClose = () => setIsOpen(false);

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
              : "bg-white dark:bg-gray-800",
            "fixed z-[100] w-full text-gray-800 transition delay-[0s] duration-[.1s] ease-in-out dark:text-white",
          )}
        >
          <div className="flex flex-row items-center p-3">
            <Link href="/">
              <FullLogo
                logo={{ size: 40, borderRadius: "md", p: 1 }}
                size="lg"
              />
            </Link>
            <div className="mr-2 flex-[1] justify-items-stretch"></div>
            <div className="mr-2 hidden md:block ">
              <Link href="/articles">
                <button
                  type="button"
                  className="text-md inline-flex items-center rounded-md border border-transparent bg-transparent px-4 py-2 font-medium hover:bg-black/[.08] focus:outline-none dark:hover:bg-white/[0.2]"
                >
                  Article
                </button>
              </Link>
              <Link href="/quickstart">
                <button
                  type="button"
                  className="text-md inline-flex items-center rounded-md border border-transparent bg-transparent px-4 py-2 font-medium  hover:bg-black/[.08] focus:outline-none  dark:hover:bg-white/[0.2]"
                >
                  Quickstarts
                </button>
              </Link>
              <Link href="/apis">
                <button
                  type="button"
                  className="text-md inline-flex items-center rounded-md border border-transparent bg-transparent px-4 py-2 font-medium  hover:bg-black/[.08] focus:outline-none  dark:hover:bg-white/[0.2]"
                >
                  APIs
                </button>
              </Link>
              <Link href="/sdks">
                <button
                  type="button"
                  className="text-md inline-flex items-center rounded-md border border-transparent bg-transparent px-4 py-2 font-medium  hover:bg-black/[.08] focus:outline-none  dark:hover:bg-white/[0.2]"
                >
                  SDKs
                </button>
              </Link>
            </div>
            <div className="hidden gap-2 sm:flex ">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-transparent px-2 py-2 text-sm font-medium hover:bg-black/[.08] focus:outline-none  dark:hover:bg-white/[0.2]"
              >
                <Link href="">
                  <FaGithub size="24px" />
                </Link>
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-transparent px-2 py-2 text-sm font-medium hover:bg-black/[.08] focus:outline-none  dark:hover:bg-white/[0.2]"
              >
                <Link href="">
                  <FaDiscord size="24px" />
                </Link>
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-transparent px-2 py-2 text-sm font-medium hover:bg-black/[.08] focus:outline-none  dark:hover:bg-white/[0.2]"
              >
                <Link href="">
                  <FaYoutube size="24px" />
                </Link>
              </button>
            </div>
            <button
              type="button"
              className="mx-2 inline-flex items-center rounded-md border border-transparent bg-transparent px-2 py-2 text-sm font-medium hover:bg-black/[.08] focus:outline-none  dark:hover:bg-white/[0.2]"
              onClick={toggleColorMode}
            >
              <FaMoon size="20px" />
            </button>

            <button
              className="mx-2 inline-flex items-center rounded-md border border-transparent bg-transparent px-2 py-2 text-sm font-medium hover:bg-black/[.08] focus:outline-none  dark:hover:bg-white/[0.2] sm:block md:hidden"
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
                    <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
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
                          <FullLogo
                            logo={{ size: 40, borderRadius: "md", p: 1 }}
                            size="lg"
                          />
                        </Link>
                        {/* <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                      alt="Your Company"
                    /> */}
                      </div>
                      <div className="mt-5 h-0 flex-1 overflow-y-auto">
                        <div className="border-b-2 border-gray-50"></div>
                        <nav className="space-y-2 px-3">
                          <Link
                            href="/articles"
                            className=" group flex items-center rounded-md px-4 py-2 text-base font-medium hover:bg-gray-200"
                          >
                            Article
                          </Link>
                          <Link
                            href="/quickstart"
                            className=" group flex items-center rounded-md px-4 py-2 text-base font-medium hover:bg-gray-200"
                          >
                            Quickstart
                          </Link>
                          <Link
                            href="/apis"
                            className=" group flex items-center rounded-md px-4 py-2 text-base font-medium hover:bg-gray-200"
                          >
                            APIs
                          </Link>
                          <Link
                            href="/sdks"
                            className=" group flex items-center rounded-md px-4 py-2 text-base font-medium hover:bg-gray-200"
                          >
                            SDKs
                          </Link>
                          <div className="border-b-2 border-gray-100"></div>
                          <Link
                            href=""
                            className=" group flex items-center rounded-md px-4 py-2 text-base font-medium hover:bg-gray-200"
                          >
                            <FaGithub size="24px" />
                            <span className="ml-3">Github</span>
                          </Link>
                          <Link
                            href=""
                            className=" group flex items-center rounded-md px-4 py-2 text-base font-medium hover:bg-gray-200"
                          >
                            <FaDiscord size="24px" />
                            <span className="ml-3">Discord</span>
                          </Link>
                          <Link
                            href=""
                            className=" group flex items-center rounded-md px-4 py-2 text-base font-medium hover:bg-gray-200"
                          >
                            <FaYoutube size="24px" />
                            <span className="ml-3">Youtube</span>
                          </Link>
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
