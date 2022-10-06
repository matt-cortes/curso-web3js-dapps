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
    handleChange,
    useToast,
  } from "@chakra-ui/react";
  import { QuestionIcon, DragHandleIcon} from "@chakra-ui/icons";
  import { useWeb3React } from "@web3-react/core";
  import { useState } from "react";
  import usePruebaPago from "../../../hooks/usePruebaPago";
  import Web3 from "web3";
  
  const SendMoney = () => {
    const pruebaPago = usePruebaPago();
    const [isMinting, setIsMinting] = useState(false);
    const { active, account } = useWeb3React();
    const toast = useToast();
    const contract_address = "";
    
    const [linkPago, setLinkPago] = useState('');
    const [address, setAdddress] = useState('');
    const [quantity, setQuantity] = useState('');
    
    const send = () => {
      setIsMinting(true);
      const taransaction = {
        'address' : address,
        'quantity': quantity
      }
  
      pruebaPago.methods
        .make_payment(taransaction.address)
        .send({
          from: account,
          value: Web3.utils.toWei(taransaction.quantity),
        })
        .on("transactionHash", (txHash) => {
          toast({
            title: "Transacción enviada",
            description: txHash,
            status: "info",
          });
        })
        .on("receipt", () => {
          setIsMinting(false);
          toast({
            title: "Transacción confirmada",
            description: "Nunca pares de aprender.",
            status: "success",
          });
        })
        .on("error", (error) => {
          setIsMinting(false);
          toast({
            title: "Transacción fallida",
            description: error.message,
            status: "error",
          });
        });
        
    };

    

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
              <Input placeholder='Ingresa link de pago' size='md'  />
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
                  <Input 
                    type='text' 
                    id="address" 
                    onChange={e => setAdddress(e.target.value)} 
                  />
              </FormControl>
              <FormControl>
                  <FormLabel>Monto</FormLabel>
                  <Input 
                    type='number' 
                    id="quantity" 
                    onChange={e => setQuantity(e.target.value)} 
                  />
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
                  bg={"redefine_green.500"}
                  onClick={send}>
                  Siguiente
                  </Button>
          </Stack>
          
        
      </Stack>
    );

    
  };
  
  export default SendMoney;
  