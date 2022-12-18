import { Stack } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header/Header";
import Opening from "../components/Section/Opening";

const Home = () => {
  return (
    <Stack marginTop="-0.5rem">
      <Header />
      <Opening />
    </Stack>
  );
};

export default Home;
