import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalContent,
  ModalBody,
  ModalOverlay,
  Select,
  Textarea,
  ModalCloseButton,
} from "@chakra-ui/react";

const ModalRegister = ({
  isOpen,
  onClose,
  nameValue,
  addressValue,
  jobValue,
  emailValue,
  handleChangeName,
  handleChangeEmail,
  handleChangeAddress,
  handleChangeJob,
  handleSubmit,
}) => {
  return (
    <Modal
      isCentered
      motionPreset="slideInBottom"
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent
        borderRadius="20px"
        pb="2.5rem"
        pt="2.35rem"
        bgColor="chocolate"
        pl="0.8rem"
        pr="2rem"
      >
        <ModalCloseButton
          color="white"
          fontSize="1.375rem"
          m="1rem"
          _hover={{ color: "yellow.500" }}
        />
        <ModalBody color="white">
          <Heading as="h1" fontSize="4xl">
            Register
          </Heading>
          <FormControl as="form" onSubmit={handleSubmit}>
            <Box pt="2.2rem">
              <FormLabel htmlFor="nama">Nama Lengkap</FormLabel>
              <Input
                type="text"
                name="nama"
                value={nameValue}
                placeholder="Ex: AL Fattah"
                pt="0.2rem"
                _hover={{ borderColor: "whiteAlpha.400" }}
                borderColor="whiteAlpha.200"
                focusBorderColor="yellow.500"
                onChange={handleChangeName}
                required
              />
            </Box>
            <Box pt="1.5rem">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={emailValue}
                placeholder="Ex: yesa@gmail.com"
                pt="0.2rem"
                _hover={{ borderColor: "whiteAlpha.400" }}
                borderColor="whiteAlpha.200"
                focusBorderColor="yellow.500"
                onChange={handleChangeEmail}
                required
              />
            </Box>
            <Box pt="1.5rem">
              <FormLabel htmlFor="alamat">Alamat</FormLabel>
              <Textarea
                placeholder="Ex: Street Magenta"
                name="alamat"
                value={addressValue}
                _hover={{ borderColor: "whiteAlpha.400" }}
                borderColor="whiteAlpha.200"
                focusBorderColor="yellow.500"
                onChange={handleChangeAddress}
                required
              />
            </Box>
            <Box pt="1.5rem">
              <FormLabel htmlFor="pekerjaan">Pekerjaan</FormLabel>
              <Select
                placeholder="Pilih Pekerjaan"
                required
                value={jobValue}
                _hover={{ borderColor: "whiteAlpha.400" }}
                borderColor="whiteAlpha.200"
                onChange={handleChangeJob}
                focusBorderColor="yellow.500"
              >
                <option value="pns">PNS</option>
                <option value="swasta">Swasta</option>
                <option value="usaha">Usaha</option>
              </Select>
            </Box>
            <Button
              type="submit"
              mt="2.5rem"
              bgColor="whiteAlpha.300"
              fontWeight="semibold"
              pt="1.6rem"
              pb="1.5rem"
              px="2rem"
              fontSize="1rem"
              _hover={{ bgColor: "yellow.700" }}
              _focus={{ bgColor: "yellow.700" }}
            >
              Submit
            </Button>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalRegister;
