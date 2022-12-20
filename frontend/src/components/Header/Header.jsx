import { Box, Flex, Image } from "@chakra-ui/react";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={{ base: "2rem", md: "4rem" }}
      py="1.6rem"
      position="fixed"
      zIndex="10"
      top="0"
      left="0"
      right="0"
    >
      <Flex alignItems="center">
        <Image src="/multimatics-logo.png" objectFit="cover" />
        <SocialMedia
          ms="3rem"
          colorIcon="white"
          display={{ base: "none", md: "block" }}
        />
      </Flex>
      <Navbar />
    </Box>
  );
};

export default Header;
