import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const Section = ({ image, titles, description, linkTitle }) => {
  return (
    <Box bgImage={image} bgPosition="center" bgSize="cover" color="white">
      <Flex
        flexDirection="column"
        justify="center"
        pt="2rem"
        height="100vh"
        ml={{ base: "2rem", lg: "10rem" }}
      >
        <Heading
          textTransform="uppercase"
          fontWeight="black"
          fontSize={{ base: "2.60rem", md: "2.8rem" }}
        >
          {titles.map((title, index) => (
            <Text key={index}>{title}</Text>
          ))}
        </Heading>
        <Text
          fontSize="3xl"
          textTransform="capitalize"
          mt="-0.5rem"
          w={{ base: "100%", md: "65%" }}
        >
          {description}
        </Text>
        <Link color="pink.500" fontSize="2xl" mt="-0.5rem">
          {linkTitle}
        </Link>
      </Flex>
    </Box>
  );
};

export default Section;
