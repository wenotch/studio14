// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

const colors = {
  dark: "#2C3237",
  blue: "#314EF9",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const components = {
  //checkbox component
  Checkbox: {
    baseStyle: {
      control: {
        _checked: {
          bg: "#3F3F3F",
        },
      },
    },
  },
};

export const theme = extendTheme({ colors, config, components });
