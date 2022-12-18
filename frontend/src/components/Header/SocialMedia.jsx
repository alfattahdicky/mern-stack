import { Box } from "@chakra-ui/react";

import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";
import Icon from "../Icon";

const SocialMedia = ({ colorIcon, ...props }) => {
  return (
    <Box {...props}>
      <Icon icon={<AiOutlineInstagram />} color={colorIcon} />
      <Icon icon={<AiOutlineFacebook />} color={colorIcon} />
      <Icon icon={<AiOutlineYoutube />} color={colorIcon} />
      <Icon icon={<AiOutlineLinkedin />} color={colorIcon} />
    </Box>
  );
};

export default SocialMedia;
