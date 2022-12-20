import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

const services = [
  {
    title: "Digital Innovation",
    description:
      "Helping companies to grow with all-rounded Digital Innovation strategies",
  },
  {
    title: "DATA MANAGEMENT",
    description:
      "Elevate data Management strategies to optimize business decisions and performance.",
  },
  {
    title: "INFORMATION SECURITY",
    description:
      "Protect systems, networks, and data through enhanced people, process, and technology to minimize loss from cyber attacks.",
  },
  {
    title: "ACADEMY",
    description:
      "Recognized and well-known training programs to unlock your highest talent potential and survive the talent competition",
  },
  {
    title: "IT GRC",
    description:
      "Manage enterprise IT by aligning it with business goals, managing the risks and complying with regulations to optimize business performance.",
  },
  {
    title: "ITSM",
    description:
      "Integrate processes, capabilities, and technology for quality services and IT optimization. ",
  },
  {
    title: "CAMPUS AFFILIATE",
    description:
      "Supporting the talent development for both students and lecturers through International Certifications Partnership Program",
  },
  {
    title: "CONFERENCE",
    description:
      "Key conferences and annual in collaboration with thought leaders to broaden perspectives with the latest IT trends",
  },
];

const Services = () => {
  return (
    <Box
      color="white"
      px={{ base: "2.5rem", md: "5rem", lg: "10rem" }}
      pt="2rem"
      pb="4rem"
    >
      <Heading textTransform="uppercase">Our Services</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {services.map((service) => (
          <Box
            width="250px"
            border="2px solid white"
            px="1.5rem"
            pt="1.2rem"
            pb="2rem"
            mt="2rem"
            cursor="pointer"
            _hover={{
              backgroundColor: "yellow.400",
              borderColor: "yellow.400",
            }}
          >
            <Heading
              as="h1"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="1.5rem"
              _hover={{ color: "black" }}
            >
              {service.title}
            </Heading>
            <Text fontWeight="normal" color="gray.300" fontSize="1rem" _hover={{color: "white"}} mt="0.5rem">
              {service.description}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
