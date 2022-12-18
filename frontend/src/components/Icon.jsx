import { IconButton } from "@chakra-ui/react";

const Icon = ({ icon, ...props }) => {
  return (
    <IconButton
      icon={icon}
      color="white"
      _hover={{ background: "transparent", color: "yellow.600" }}
      _focus={{ background: "transparent" }}
      background="none"
      fontSize="1.5rem"
      {...props}
    />
  );
};

export default Icon;
