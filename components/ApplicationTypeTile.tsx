import Link from "next/link";
import Image from "next/image";

type ApplicationTypeTileProps = {
  id: string;
  image: string;
  title: string;
  content: string;
  example: string;
};

export default function ApplicationTypeTile(props: ApplicationTypeTileProps) {
  return (
    <>
      <Link href={`/quickstart#${props.id}`}>
        <div className="flex h-[320px] flex-col items-center justify-center rounded-md border-2 border-transparent bg-white p-7 text-gray-800 shadow-lg shadow-gray-300 transition-all hover:border-blue-300 dark:bg-gray-700 dark:text-white dark:shadow-gray-900">
          <Image
            src={props.image}
            alt={props.title}
            sizes=""
            className="mb-7 rounded-2xl shadow-lg"
            width={100}
            height={100}
          />
          <p className="mb-2 text-center text-lg font-bold">{props.title}</p>
          <p className="mb-1 text-center text-base">{props.content}</p>
          <p className="mt-1 text-center text-[13px] text-gray-500">
            {props.example}
          </p>
        </div>
      </Link>
    </>
  );
}
