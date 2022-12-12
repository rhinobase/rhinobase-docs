import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { HiExclamationTriangle, HiOutlineChevronDown } from "react-icons/hi2";
import { classNames } from "utils/className";
import findActiveAccordion from "utils/findActiveAccordion";

export type SidebarNestedType = {
  title: string;
  href?: string;
  icon?: JSX.Element;
  isExternal?: boolean;
  items?: SidebarNestedType[];
};

type SidebarProps = {
  children: JSX.Element;
  options: SidebarNestedType[];
};

function SidebarNested(
  props: SidebarNestedType & { index: number; active: number[] },
) {
  const isActive = props.index == props.active[0];
  // const [active, setActive] = useState<ExpandedIndex>();

  // useEffect(() => {
  //   setActive(props.active[1]);
  // }, [props.active]);

  if (props.items) {
    return (
      <>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="mb-2 flex w-full items-center rounded-lg py-2 px-4 text-left font-semibold hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-600">
                <HiOutlineChevronDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } mr-3 h-4 w-4 font-extrabold`}
                />
                {props.title}
              </Disclosure.Button>
              <Disclosure.Panel className=" pl-4">
                {props.items?.map((item, index) => (
                  <SidebarNested
                    key={index}
                    {...item}
                    index={index}
                    active={isActive ? props.active.slice(1) : []}
                  />
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </>
    );
  }

  if (props.href)
    return (
      <>
        <Link href={props.href} className="focus:outline-none">
          <button
            className={classNames(
              isActive
                ? "text-default-500 hover:bg-default-50  dark:text-default-100 dark:hover:bg-gray-600"
                : "hover:bg-gray-100 dark:hover:bg-gray-600 ",
              "mb-1 flex w-full items-center rounded-lg py-2 px-4 text-left font-medium capitalize focus:outline-none",
            )}
          >
            {props.title}
          </button>
        </Link>
      </>
    );

  return (
    <>
      <div className="rounded-md bg-yellow-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <HiExclamationTriangle
              className="h-5 w-5 text-red-600"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              neither href nor items are found!
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>Please declare one of them.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Sidebar(props: { options: SidebarNestedType[] }) {
  const router = useRouter();
  // const [active, setActive] = useState<ExpandedIndex>();
  const currentIndex = useMemo(
    () => findActiveAccordion(props.options, router.pathname) ?? [],
    [props.options, router.pathname],
  );

  // useEffect(() => {
  //   setActive(currentIndex[0]);
  // }, [currentIndex]);

  return (
    <>
      <div className="w-full max-w-[300px] flex-col px-2 py-3 lg:flex">
        <Disclosure>
          {props.options.map((item, index) => (
            <SidebarNested
              key={index}
              {...item}
              index={index}
              active={[...currentIndex]}
            />
          ))}
        </Disclosure>
      </div>
    </>
  );
}

export default function SidebarWrapper(props: SidebarProps) {
  return (
    <>
      <div
        className="flex items-start"
        style={{ height: "calc(100vh - 48px)" }}
      >
        <div className="hidden w-full max-w-[300px] flex-col px-2 py-3 md:flex">
          <Sidebar options={props.options} />
        </div>
        <div className="h-full w-full overflow-auto border-l px-6 dark:border-gray-600">
          <div className="container m-auto max-w-6xl">{props.children}</div>
        </div>
      </div>
    </>
  );
}
