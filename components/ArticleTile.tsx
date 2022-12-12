import Link from "next/link";
// import Image from "next/image";
import dateFormat from "dateformat";

export type ArticleTileType = {
  href: string;
  image: string;
  title: string;
  description: string;
  tag?: string;
  user: {
    profile_image: string;
    name: string;
  };
  date: string;
};

export default function ArticleTile(props: ArticleTileType) {
  return (
    <>
      <Link href={props.href}>
        <div className="h-full w-full border-b-2 border-gray-100 py-4  hover:border-default-300 dark:border-gray-700">
          <div className="flex h-full flex-col items-start gap-3">
            <div className="w-full rounded-md">
              <img
                src={props.image}
                alt={props.tag}
                className="h-full w-full rounded-lg"
              />
            </div>
            <p className="text-base font-medium text-default-500">
              {props.tag}
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{props.title}</h3>
              <p className="text-gray-500">{props.description}</p>
            </div>
            <div className="flex-1" />
            <div className="mt-5 flex w-full items-center">
              <img
                src={props.image}
                alt={props.tag}
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <div className="">
                <p className="ml-4 text-base  font-medium">
                  {" "}
                  {props.user.name}
                </p>
                <p className="ml-4 text-base">
                  {" "}
                  {dateFormat(props.date, "mmmm d, yyyy")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* <Link href={props.href}>
      <AspectRatio
        ratio={16 / 9}
        overflow="hidden"
        mb={5}
        w="100%"
        borderRadius="xl"
      >
        <Image src={props.image} alt={props.tag} />
      </AspectRatio>
      <Text color="messenger.500" fontWeight={600} mb={3}>
        {props.tag}
      </Text>
      <Heading size="md" mb={2}>
        {props.title}
      </Heading>
      <Text color="GrayText">{props.description}</Text>
      <HStack mt={5}>
        <Avatar name={props.user.name} src={props.user.profile_image} />
        <Box>
          <Text fontWeight={600} textTransform="capitalize">
            {props.user.name}
          </Text>
          <Text color="GrayText">{dateFormat(props.date, "mmmm d, yyyy")}</Text>
        </Box>
      </HStack>
    </Link> */}
    </>
  );
}
