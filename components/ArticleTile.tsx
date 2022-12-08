import {
  Avatar,
  Box,
  Text,
  Image,
  Heading,
  HStack,
  AspectRatio,
} from "@chakra-ui/react";
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
        <div className="w-[100%] h-[100%] border-b-2 border-gray-400/[0.2] hover:border-blue-300 py-4">
          <div className="flex items-start flex-col flex-wrap">
            <div className="mb-5 rounded-md w-[100%]">
            <img src={props.image} alt={props.tag} className="w-[100%] h-[100%] rounded-lg" />
            </div>      
            <div>
              <p className="text-base font-medium text-blue-500 mb-3">{props.tag}</p>
              <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
              <p className="">{props.description}</p>
            </div>
            <div className="flex mt-5 items-center w-[100%]">
              <img src={props.image} alt={props.tag} className="w-[50px] h-[50px] rounded-full object-cover" />
              <div className=""> 
                <p className="text-base font-medium  ml-4"> {props.user.name}</p>
                <p className="text-base ml-4"> {dateFormat(props.date, "mmmm d, yyyy")}</p>
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
