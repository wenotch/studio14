import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Link,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { menus } from "../utils/constants";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      px={{ base: "20px", md: "70px" }}
      boxShadow="0px 4px 20px 0px #0000000F"
      bg="white"
      h={"80px"}
    >
      <Flex alignItems={"center"}>
        <Image src="/logo.svg" alt="logo" mr="46px" />
        <Flex display={{ base: "none", md: "flex" }}>
          {menus.map((menu) => (
            <EachLink key={menu.label} label={menu.label} href={menu.href} />
          ))}
        </Flex>
      </Flex>
      <Flex alignItems={"center"}>
        <Switch
          defaultChecked={true}
          colorScheme="facebook"
          size="md"
          mr="14px"
        />
        <Text
          fontSize={"14px"}
          fontWeight={600}
          color={"dark"}
          borderRight={"1px solid #E4E4E4"}
          pr="28px"
          display={{ base: "none", md: "block" }}
        >
          Switch to Employee
        </Text>

        <Avatar
          ml={{
            base: "auto",
            md: "28px",
          }}
          size={"sm"}
          name="Jonathan Adams"
        />
        <Text
          fontSize={"14px"}
          fontWeight={600}
          color={"dark"}
          ml="12px"
          display={{ base: "none", md: "block" }}
        >
          Jonathan
        </Text>

        <IconButton
          display={{ base: "block", md: "none" }}
          w={6}
          h={6}
          ref={btnRef}
          onClick={onOpen}
          color={"dark"}
          as={HamburgerIcon}
          aria-label="Menu"
          ml="14px"
        />
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size={"lg"} />

          <DrawerBody mt="40px">
            {menus.map((menu) => (
              <EachLink key={menu.label} label={menu.label} href={menu.href} />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default NavBar;

function EachLink({ label, href }: { label: string; href: string }) {
  return (
    <Box
      borderBottom={label === "Resources" ? "4px solid #314EF9" : "none"}
      paddingBottom={"22px"}
      mt="30px"
    >
      <Link
        mx="20px"
        fontSize={"14px"}
        color={"dark"}
        fontWeight={600}
        href={href}
        _hover={{ textDecoration: "none" }}
      >
        {label}
      </Link>
    </Box>
  );
}
