import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

function Hero() {
  return (
    <Box
      w={{ base: "90%", md: "40%" }}
      justifyContent={"center"}
      mx="auto"
      mt={{ base: "70px", md: "90px" }}
    >
      <Text
        fontWeight={600}
        textAlign={"center"}
        color={"dark"}
        fontSize={{ base: "40px", md: "52px" }}
      >
        Resources
      </Text>
      <Text
        textAlign={"center"}
        color={"dark"}
        fontSize={{ base: "18px", md: "16px" }}
      >
        Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
        commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue
      </Text>

      <InputGroup
        size={"lg"}
        _placeholder={{ color: "#222222" }}
        mt={{ base: "40px", md: "51px" }}
        color={"dark"}
        bg="white"
      >
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          fontSize={"14px"}
          border={"1px solid #A1A1A1"}
          type="text"
          placeholder="Search by title or keyword"
        />
      </InputGroup>
    </Box>
  );
}

export default Hero;
