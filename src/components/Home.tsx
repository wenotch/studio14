import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import CardSection from "./CardSection";

function Home() {
  return (
    <Box w="full" bg="#FAFAFA">
      <NavBar />
      <Hero />
      <CardSection />
    </Box>
  );
}

export default Home;
