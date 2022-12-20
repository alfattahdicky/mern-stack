import { Stack, Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import One from "../components/Section/One";
import Three from "../components/Section/Three";
import Two from "../components/Section/Two";
import Four from "../components/Section/Four";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../style.css";
import Services from "../components/Section/Services";

const Home = () => {
  return (
    <Stack marginTop="-0.5rem" bg="black">
      <Header />
      <One />
      <Two />
      <Three />
      <Four />
      <Services />
    </Stack>
  );
};

export default Home;
