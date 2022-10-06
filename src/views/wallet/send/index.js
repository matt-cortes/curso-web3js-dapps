import {
    Stack,
    Heading,
    Text,
    Button,
    Input,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    FormHelperText,
    Tag,
    IconButton,
    SimpleGrid,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Lorem,
    useDisclosure,
  
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { QuestionIcon, DragHandleIcon} from "@chakra-ui/icons";
  import { useWeb3React } from "@web3-react/core";
  import RequestAccess from "../../../components/request-access";
  import PunkCard from "../../../components/punk-card";
  import { usePlatziPunkData } from "../../../hooks/usePlatziPunksData";
  import { useParams } from "react-router-dom";
  import Loading from "../../../components/loading";
  import { useState } from "react";
  import usePlatziPunks from "../../../hooks/usePlatziPunks";
  
  const Send = () => {
      
    return (
      <Stack
      spacing={{ base: 8, md: 10 }}
      py={{ base: 5 }}
      direction={{ base: "column"}}
      >
          <Heading as='h2' size='lg' noOfLines={3} align="center" color="redefine_green.600">
              Enviar Coins
          </Heading>
          <Text fontSize="lg">Puedes enviar dinero a través de un link de pago, un código QR o ingresando los datos manualmente.</Text>
          
          <SimpleGrid columns={2} spacing={3}>
              <Input placeholder='Ingresa link de pago' size='md' />
              <IconButton
                  variant='outline'
                  colorScheme='teal'
                  aria-label='Call Sage'
                  fontSize='20px'
                  _hover={{ bg: "redefine_green.600", color:"white" }}
                  icon={<Image src="./icons/bi_qr-code-scan.svg" width="32px"  />}
              />
          </SimpleGrid>
          <Heading as='h3' size='md' noOfLines={1} color="redefine_green.600">
              Datos de la transacción
          </Heading>
          <Stack spacing={3}>
              <FormControl>
                  <FormLabel>Dirección de destino</FormLabel>
                  <Input type='text' />
              </FormControl>
              <FormControl>
                  <FormLabel>Monto</FormLabel>
                  <NumberInput defaultValue={0.05} precision={2} step={0.2}>
                      <NumberInputField />
                      <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                      </NumberInputStepper>
                  </NumberInput>
                  <FormHelperText align="right">Equivalente a: $180.63 MX</FormHelperText>
              </FormControl>
              <FormControl>
                  <FormLabel>Concepto</FormLabel>
                  <Input type='text' />
              </FormControl>
              <Text fontWeight={600} fontSize={{ base: '10pt', md: '12pt', lg: '12pt' }} align="right" color="grey">
                  Costo por transacción:
                  <Tag ml={2} colorScheme="gray" color="grey" fontSize={{ base: '10pt', md: '12pt', lg: '12pt' }}>
                      0.006 RDOC/$5.25 MX
                  </Tag>
                  <IconButton icon={<QuestionIcon w={4} h={4} /> }
                      borderRadius={"full"}
                      height={"20px"}
                      width={"5px"}
                      bg={"white"}
                     
                      _hover={{ bg: "white", color:"redefine_green.600" }}
                    />
              </Text>
              <Text fontWeight={600} fontSize={{ base: '10pt', md: '12pt', lg: '12pt' }} align="right" color="grey">
                  Comisión reDeFine Pay:
                  <Tag ml={2} colorScheme="gray" color="grey" fontSize={{ base: '10pt', md: '12pt', lg: '12pt' }}>
                      0.003 RDOC/$3.25 MX
                  </Tag>
                  <IconButton icon={<QuestionIcon w={4} h={4} /> }
                      borderRadius={"full"}
                      height={"20px"}
                      width={"5px"}
                      bg={"white"}
                     
                      _hover={{ bg: "white", color:"redefine_green.600" }}
                    />
              </Text>
              <Text fontWeight={700} fontSize={{ base: '10pt', md: '12pt', lg: '12pt' }} align="right" color="redefine_green.600">
                  Total:
                  <Tag ml={2} colorScheme="gray" color="redefine_green.600" fontWeight={700} fontSize={{ base: '10pt', md: '12pt', lg: '12pt' }}>
                      0.003 RDOC/$3.25 MX
                  </Tag>
                  <IconButton icon={<QuestionIcon w={4} h={4} /> }
                      borderRadius={"full"}
                      height={"20px"}
                      width={"5px"}
                      bg={"white"}
                     
                      _hover={{ bg: "white", color:"redefine_green.600" }}
                    />
              </Text>
              
              
              <Button rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  colorScheme={"redefine_green"}
                  bg={"redefine_green.500"}>
                  Siguiente
                  </Button>
          </Stack>
          
        
      </Stack>
    );

    function BasicUsage() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
          <>
            <Button onClick={onOpen}>Open Modal</Button>
      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Lorem count={2} />
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }
      
  };
  
  export default Send;
  