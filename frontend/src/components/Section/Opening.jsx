import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const Opening = () => {
  return (
    <Box
      bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
      bgPosition="center"
      bgSize="cover"
      minHeight="100vh"
      color="white"
    >
      <Flex
        flexDirection="column"
        justify="center"
        ml={{ md: "5rem", lg: "10rem" }}
        minHeight="100vh"
      >
        <Heading
          textTransform="uppercase"
          fontWeight="black"
          fontSize="2.80rem"
        >
          Opening your doors <br /> to become a professional <br /> Data
          Scientist
        </Heading>
        <Text
          fontWeight="bold"
          fontSize="3xl"
          textTransform="capitalize"
          mt="-0.5rem"
        >
          Data at the heart of digital transformation
        </Text>
        <Link color="pink.500" fontSize="2xl" mt="-0.5rem">
          read more...
        </Link>
      </Flex>
    </Box>
  );
};

export default Opening;
