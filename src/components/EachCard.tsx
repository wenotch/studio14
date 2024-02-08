import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function EachCard({
  data,
}: {
  data: {
    title: string;
    bg: string;
    description: string;
    icon: string;
  };
}) {
  return (
    <Box
      bgImage={`url(${data.bg})`}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      rounded={"10px"}
      px="30px"
      pb="30px"
      cursor={"pointer"}
      transition={"all 0.6s ease"}
      _hover={{
        shadow: "0px 4px 20px 0px #0000000F",
      }}
    >
      <Image src={data.icon} alt={data.title} mt="50px" />
      <Text fontSize={"18px"} mt="50px" fontWeight={600} color={"dark"}>
        {data.title}
      </Text>
      <Text fontSize={"14px"} my="13px" color={"#828282"}>
        {data.description}
      </Text>
      <Text
        display={"inline"}
        bg="#F2F2F2"
        fontSize={"14px"}
        mt="20px"
        color={"##222222"}
        rounded={"full"}
        px="17px"
        py="5px"
      >
        Secure Base
      </Text>
    </Box>
  );
}

export default EachCard;
