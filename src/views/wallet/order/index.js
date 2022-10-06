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
    Switch,
    Select,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
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
  import usePruebaPago from "../../../hooks/usePruebaPago";
  
  const Order = () => {
      
    return (
      <Stack
      spacing={{ base: 8, md: 10 }}
      py={{ base: 5 }}
      direction={{ base: "column"}}
      >
          <Heading as='h2' size='lg' noOfLines={3} align="center" color="redefine_green.600">
              Generar Orden de Pago
          </Heading>
            <FormControl display='flex' alignItems='center' >
                <FormLabel htmlFor='email-alerts' mb='0' >
                ¿Cómo prefieres realizar esta órden de pago?
                </FormLabel>
                <Switch id='email-alerts' size='lg' placeholder="QR"/>
            </FormControl>
          <Heading as='h3' size='md' noOfLines={1} color="redefine_green.600">
              Datos de la transacción
          </Heading>
          <Stack spacing={3}>
              <FormControl>
                  <FormLabel>Dirección de destino para recibir la transferencia</FormLabel>
                  <Select placeholder='Select option'>
                    <option value='option1'>cafeteria-ventas.rsk</option>
                    <option value='option2'>karless.rsk</option>
                </Select>
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
                  Generar
                  </Button>
          </Stack>
          
        
      </Stack>
    );

      
  };
  
  export default Order;
  