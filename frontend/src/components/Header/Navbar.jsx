import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Box,
  Link,
  Text,
  useDisclosure,
  DrawerFooter,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Icon from "../Icon";
import ModalRegister from "../ModalRegister";
import SocialMedia from "./SocialMedia";
import { useState } from "react";
import useRegisterStore from "../../stores/registerStore";

const Navbar = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {
    onOpen: onOpenModal,
    isOpen: isOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const postData = useRegisterStore((state) => state.addData);
  const toast = useToast();

  const [register, setRegister] = useState({
    nama_lengkap: "",
    email: "",
    pekerjaan: "",
    alamat: "",
    jenis_kelamin: "",
  });

  const handleChangeName = (e) => {
    setRegister({ ...register, nama_lengkap: e.target.value });
  };
  const handleChangeJob = (e) => {
    setRegister({ ...register, pekerjaan: e.target.value });
  };
  const handleChangeAddress = (e) => {
    setRegister({ ...register, alamat: e.target.value });
  };
  const handleChangeEmail = (e) => {
    setRegister({ ...register, email: e.target.value });
  };
  const handleChangeGender = (e) => {
    console.log(e.target.value);
    setRegister({ ...register, jenis_kelamin: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(register);
    try {
      const data = await postData(register);
      if (data === 200) {
        toast({
          position: "top-right",
          status: "success",
          title: "Success Create Data",
          duration: 2000,
        });
        setTimeout(() => onCloseModal(), 1000);
      } else throw new Error("Failed Create Data");
    } catch (err) {
      toast({
        position: "top-right",
        status: "error",
        title: err,
        duration: 2000,
      });
    }
  };

  return (
    <Box>
      <Icon icon={<AiOutlineMenu />} onClick={onOpen} />
      <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="chocolate" pl="3.8rem" pt="1rem" pb="1.5rem">
          <DrawerCloseButton
            fontSize="1.4rem"
            color="white"
            mr="2.4rem"
            mt="1.8rem"
            _hover={{ color: "yellow.800" }}
          />
          <DrawerHeader mt="4rem">
            <Link
              color="yellow.500"
              fontSize="0.8rem"
              fontWeight="normal"
              textTransform="uppercase"
              _hover={{ textUnderline: "none" }}
            >
              Main Menu
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <Box
              height="18rem"
              mt="3rem"
              width="23.5rem"
              maxWidth="100%"
              display="block"
              overflowY="scroll"
            >
              <Link
                color="whiteAlpha.500"
                fontWeight="semibold"
                fontSize="1.8rem"
                display="block"
                mt="4"
                _hover={{ textDecoration: "none", color: "white" }}
                onClick={onOpenModal}
              >
                Register
              </Link>
              <Link
                color="whiteAlpha.500"
                fontWeight="semibold"
                fontSize="1.8rem"
                display="block"
                mt="4"
                _hover={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
              <Link
                color="whiteAlpha.500"
                fontWeight="semibold"
                fontSize="1.8rem"
                display="block"
                mt="4"
                _hover={{ textDecoration: "none", color: "white" }}
              >
                Consultancy
              </Link>
              <Link
                color="whiteAlpha.500"
                fontWeight="semibold"
                fontSize="1.8rem"
                display="block"
                mt="4"
                _hover={{ textDecoration: "none", color: "white" }}
              >
                Digital Innovation
              </Link>
              <Link
                color="whiteAlpha.500"
                fontWeight="semibold"
                fontSize="1.8rem"
                display="block"
                mt="4"
                _hover={{ textDecoration: "none", color: "white" }}
              >
                Online Learning
              </Link>
              <Link
                color="whiteAlpha.500"
                fontWeight="semibold"
                fontSize="1.8rem"
                display="block"
                mt="4"
                _hover={{ textDecoration: "none", color: "white" }}
              >
                Academy
              </Link>
              <Link
                color="whiteAlpha.500"
                fontWeight="semibold"
                fontSize="1.8rem"
                display="block"
                mt="4"
                _hover={{ textDecoration: "none", color: "white" }}
              >
                Campus Affiliate
              </Link>
              <Link
                color="whiteAlpha.500"
                fontWeight="semibold"
                fontSize="1.8rem"
                display="block"
                mt="4"
                _hover={{ textDecoration: "none", color: "white" }}
              >
                Insight
              </Link>
              <Link
                color="whiteAlpha.500"
                fontWeight="semibold"
                fontSize="1.8rem"
                display="block"
                mt="4"
                _hover={{ textDecoration: "none", color: "white" }}
              >
                Conference
              </Link>
              <Link
                color="whiteAlpha.500"
                fontWeight="semibold"
                fontSize="1.8rem"
                display="block"
                mt="4"
                _hover={{ textDecoration: "none", color: "white" }}
              >
                Contact
              </Link>
            </Box>
            <SocialMedia ms="-0.4rem" mt="6rem" colorIcon="whiteAlpha.500" />
            <Text color="whiteAlpha.700" mt="3rem">
              © Multimatics 2018. All Rights Resevers
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <ModalRegister
        isOpen={isOpenModal}
        onClose={onCloseModal}
        handleChangeName={(e) => handleChangeName(e)}
        handleChangeEmail={(e) => handleChangeEmail(e)}
        handleChangeAddress={(e) => handleChangeAddress(e)}
        handleChangeJob={(e) => handleChangeJob(e)}
        handleChangeGender={(e) => handleChangeGender(e)}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
};

export default Navbar;
