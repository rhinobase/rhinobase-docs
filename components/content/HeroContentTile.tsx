import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

type HeroContentTileprops = {
  title: string;
  href: string;
  description: string;
  image: string;
  tag: string;
};

export default function HeroContentTile(props: HeroContentTileprops) {
  return (
    <>
      <div className="width-full border-b-2 border-gray-100 px-10 dark:border-gray-600">
        <div className="flex items-start justify-between">
          <div className="flex  max-w-xl flex-col items-start space-y-5 md:flex-1">
            <h1 className="text-2xl font-semibold">{props.title}</h1>
            <p>{props.description}</p>
            <Link href={props.href} className="pb-5">
              <button
                type="button"
                className="flex items-center align-middle text-base font-bold text-default-300"
              >
                {props.tag}{" "}
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>
          <div className="flex-1 justify-self-stretch md:flex-initial"></div>
          <div className="hidden h-[200px] w-[500px] rounded-t-md md:block md:flex-1 lg:block lg:flex-initial">
            <Image
              src="https://via.placeholder.com/150?text=%20"
              alt=""
              className="h-full w-full rounded-t-md"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
