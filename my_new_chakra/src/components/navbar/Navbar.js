import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { IconButton } from "@chakra-ui/button";
import { Flex, Heading, Spacer, VStack } from "@chakra-ui/layout";
function Navbar(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";
  return (
    <div className="main_navbar">
      <VStack p={3}>
        <Flex w="100%">
          <Heading ml={5} color="cyan.500" fontSize="2em" fontWeight="800">
            kalaisurya
          </Heading>
          <Spacer />
          <IconButton
            isRound="true"
            icon={<FaFacebook />}
            onClick={() => window.open("https://www.facebook.com/")}
            ml={4}
          ></IconButton>
          <IconButton
            isRound="true"
            icon={<FaInstagram />}
            onClick={() => window.open("https://www.instagram.com/")}
            ml={4}
          ></IconButton>
          <IconButton
            icon={<FaGithub />}
            isRound="true"
            onClick={() => window.open("https://www.github.com/")}
            ml={4}
          ></IconButton>
          <IconButton
            isRound="true"
            icon={<FaTwitter />}
            onClick={() => window.open("https://www.twitter.com/")}
            ml={4}
          ></IconButton>
          <IconButton
            isRound="true"
            icon={isDark ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            ml={12}
          ></IconButton>
        </Flex>
      </VStack>
    </div>
  );
}

export default Navbar;
