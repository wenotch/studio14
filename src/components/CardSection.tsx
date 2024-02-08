import {
  Box,
  Checkbox,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { cards, filterSections } from "../utils/constants";
import EachCard from "./EachCard";
import { useState } from "react";
function CardSection() {
  const [shoeFilter, setShoeFilter] = useState(false);
  return (
    <Flex
      pb="150px"
      px={{
        base: "0px",
        md: "130px",
      }}
      mt={"66px"}
      alignItems={"flex-start"}
      flexDir={{
        base: "column",
        md: "row",
      }}
    >
      <Flex
        w="full"
        bg="#F2F2F2"
        justifyContent={"center"}
        alignItems={"center"}
        py="20px"
        mb={"40px"}
        display={{ base: "flex", md: "none" }}
        cursor={"pointer"}
        onClick={() => setShoeFilter(!shoeFilter)}
        _hover={{
          bg: "#E2E2E2",
        }}
      >
        <Flex alignItems={"center"}>
          <Image mr="10px" src="/filtericon.svg" alt="icon" />
          <Text fontSize={"16px"} fontWeight={600} color={"dark"}>
            Filter
          </Text>
        </Flex>
      </Flex>

      <Box
        display={{
          base: shoeFilter ? "block" : "none",
          md: "block",
        }}
        transition={"all 0.6s ease"}
        w="300px"
        px="20px"
        mb={{ base: "50px", md: "0px" }}
      >
        <Text
          fontSize={"16px"}
          mt={{ base: "10px", md: "50px" }}
          fontWeight={600}
          color={"dark"}
        >
          Filter
        </Text>
        <Divider mt="20px" />
        {filterSections.map((section) => (
          <Box mt="30px">
            <Text fontSize={"14px"} color={"dark"} fontWeight={600}>
              {section.title}
            </Text>

            {section.items.map((item) => (
              <Box>
                <Checkbox
                  iconColor="#3F3F3F"
                  mt="10px"
                  colorScheme="blackAlpha"
                >
                  <Text fontSize={"14px"} color={"dark"}>
                    {item}
                  </Text>
                </Checkbox>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <SimpleGrid
        px="20px"
        mt={{ base: "0px", md: "80px" }}
        ml={{
          base: "0px",
          md: "60px",
        }}
        w="full"
        columns={{ base: 1, md: 3 }}
        spacing={"20px"}
      >
        {cards.map((card) => (
          <EachCard data={card} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default CardSection;
