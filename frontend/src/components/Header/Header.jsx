import { Box, Flex, Image } from "@chakra-ui/react";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="4rem"
      py="1.6rem"
      position="fixed"
      top="0"
      left="0"
      right="0"
    >
      <Flex alignItems="center">
        <Image src="/multimatics-logo.png" objectFit="cover" />
        <SocialMedia ms="3rem" colorIcon="white" />
      </Flex>
      <Navbar />
    </Box>
  );
};

export default Header;
