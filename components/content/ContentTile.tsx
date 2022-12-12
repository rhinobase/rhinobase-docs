import Link from "next/link";
import Image from "next/image";

export type ContentTileProps = {
  title: string;
  href: string;
  image?: string;
  description?: string;
  icon?: JSX.Element;
  tags?: string[];
};

export default function ContentTile(props: ContentTileProps) {
  if (props.image) {
    return (
      <>
        <Link href={props.href}>
          <div className="h-full w-full border-b-2 border-gray-100 py-4 hover:border-default-300 dark:border-gray-600 dark:hover:border-default-300">
            <div className="flex flex-col items-start">
              <div className="mb-5 h-[130px] w-full rounded-md">
                <Image
                  src="https://via.placeholder.com/150?text=%20"
                  alt=""
                  className="h-full w-full rounded-md"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-base font-medium text-default-500 dark:text-default-300">
                {props.title}
              </p>
              <p className="mt-2">{props.description}</p>
              {(props.icon || props.tags) && (
                <div className="mt-5 flex">
                  {props.icon}
                  <p className="ml-2 text-xs font-medium text-gray-500">
                    {" "}
                    {props.tags?.join(" · ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Link>
      </>
    );
  }

  return (
    <>
      <Link href={props.href}>
        <div className="h-full w-full rounded-md border-2 border-gray-100 p-4 transition-all hover:border-default-300 dark:border-gray-600 dark:hover:border-default-300">
          <div className="flex  max-w-xl flex-col items-start">
            <p className="text-base font-medium text-default-500 dark:text-default-300">
              {props.title}
            </p>
            <p className="mt-2">{props.description}</p>
            {(props.icon || props.tags) && (
              <div className="mt-5 flex">
                {props.icon}
                <p className="ml-3 text-xs font-medium text-gray-500">
                  {" "}
                  {props.tags?.join(" · ")}
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}
