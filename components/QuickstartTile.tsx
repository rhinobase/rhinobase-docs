import Link from "next/link";
import Image from "next/image";

export type QuickstartTileProps = {
  title: string;
  href: string;
  image: string;
};

export default function QuickstartTile(props: QuickstartTileProps) {
  return (
    <>
      <Link href={props.href} className="focus:outline-none focus:ring">
        <div className="flex h-[72px] items-center justify-center rounded-lg border-2 border-gray-100 hover:border-default-300 dark:border-gray-600 dark:hover:border-default-300">
          <Image src={props.image} alt={props.title} width={30} height={30} />
          <h2 className="ml-4 text-xl font-[500]">{props.title}</h2>
        </div>
      </Link>
    </>
  );
}
