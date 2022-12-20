import {
  Box,
  Heading,
  Stack,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  TableContainer,
  Button,
  ButtonGroup,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ModalRegister from "../components/ModalRegister";
import useAdminStore from "../stores/adminStore";

const Admin = () => {
  const toast = useToast();
  const getAllData = useAdminStore((state) => state.getData);
  const getDataById = useAdminStore((state) => state.getDataById);
  const updateDataById = useAdminStore((state) => state.updateDataById);
  const deleteDataById = useAdminStore((state) => state.deleteDataById);
  const error = useAdminStore((state) => state.error);
  const datas = useAdminStore((state) => state.datas);
  const data = useAdminStore((state) => state.data);
  const [edit, setEdit] = useState({});
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    (async () => {
      await getAllData();
    })();
  }, []);

  useEffect(() => {
    if (data.id) setEdit(data);
  }, [data.id]);

  const handleEdit = async (id) => {
    onOpen();
    await getDataById(id);
  };

  const handleDelete = async (id) => {
    const status = await deleteDataById(id);
    if (status == 200) {
      toast({
        position: "top-right",
        status: "success",
        title: "Success delete Data",
        duration: 2000,
      });
    } else {
      toast({
        position: "top-right",
        status: "error",
        title: "Failed delete Data",
        duration: 2000,
      });
    }
  };

  const handleChangeName = (e) => {
    setEdit({ ...edit, nama_lengkap: e.target.value });
  };
  const handleChangeJob = (e) => {
    setEdit({ ...edit, pekerjaan: e.target.value });
  };
  const handleChangeAddress = (e) => {
    setEdit({ ...edit, alamat: e.target.value });
  };
  const handleChangeEmail = (e) => {
    setEdit({ ...edit, email: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = await updateDataById(edit.id, edit);
    if (update === 200) {
      toast({
        position: "top-right",
        status: "success",
        title: "Success update Data",
        duration: 2000,
      });
      setTimeout(() => onClose(), 500);
    } else {
      toast({
        position: "top-right",
        status: "error",
        title: `Cannot Update Field Edit`,
        duration: 2000,
      });
    }
  };

  return (
    <Stack>
      <Heading as="h1" py="2rem" px="4rem" bgColor="chocolate" color="white">
        Welcome, Admin Multimatics
      </Heading>
      <TableContainer px="4rem" pt="1rem" pb="2rem">
        <Table size="md">
          <Thead bgColor="chocolate">
            <Tr textAlign="center">
              <Th color="white">No</Th>
              <Th color="white">Nama Lengkap</Th>
              <Th color="white">Email</Th>
              <Th color="white">Alamat</Th>
              <Th color="white">Pekerjaan</Th>
              <Th color="white">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {datas.map((data, index) => {
              return (
                <Tr key={data.id}>
                  <Td>{index + 1}</Td>
                  <Td>{data.nama_lengkap}</Td>
                  <Td>{data.email}</Td>
                  <Td>{data.alamat}</Td>
                  <Td>{data.pekerjaan.toUpperCase()}</Td>
                  <Td>
                    <ButtonGroup>
                      <Button
                        colorScheme="orange"
                        onClick={() => handleEdit(data.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => handleDelete(data.id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <ModalRegister
        isOpen={isOpen}
        onClose={onClose}
        nameValue={edit.nama_lengkap}
        addressValue={edit.alamat}
        emailValue={edit.email}
        jobValue={edit.pekerjaan}
        handleChangeName={(e) => handleChangeName(e)}
        handleChangeEmail={(e) => handleChangeEmail(e)}
        handleChangeAddress={(e) => handleChangeAddress(e)}
        handleChangeJob={(e) => handleChangeJob(e)}
        handleSubmit={handleSubmit}
      />
    </Stack>
  );
};

export default Admin;
