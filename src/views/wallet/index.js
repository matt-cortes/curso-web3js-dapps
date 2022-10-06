import {
    Stack,
    Box,
    Heading,
    Text,
    Image,
    Badge,
    useToast,
    Select,
    IconButton,
    SimpleGrid,
    Center,
    Grid,
    GridItem,
    Container,
    Tag,
    
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { useWeb3React } from "@web3-react/core";
  import usePruebaPago from "../../hooks/usePruebaPago";
  import { useCallback, useEffect, useState } from "react";
  import { CheckCircleIcon, CalendarIcon} from "@chakra-ui/icons";
  
    const Wallet = () => {
      const [isMinting, setIsMinting] = useState(false);
    const [imageSrc, setImageSrc] = useState("");
    const { active, account } = useWeb3React();
    const platziPunks = usePruebaPago();
    const toast = useToast();
  
    return (
      
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 0}}
        direction={{ base: "column"}}
        
      >
        
        <Stack align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column"}}
          bg='redefine_green.500' w='100%' height={{ base: "550px", sm: "600px", lg: "650px" }}
          color='white' borderBottomRadius={"200px"}>
          {active ? (
            <>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                color="white"
                align="center"
              >
                <Center>
                  <Image src="./icons/emojione-monotone_money-bag.svg" width="200px"  />
                </Center>
                
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "redefine_green.600",
                    zIndex: -1,
                  }}
                >
                  584 RDOC
                </Text>
                <br />
                <Text as={"span"} color={"white"} fontSize={{ base: "3xl", sm: "3xl", lg: "6xl" }}>
                  $11,691.73 MX
                </Text>
              </Heading>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
                padding={"10px"}
  
              >
                <SimpleGrid columns={3} spacing={2}>
                  <Link to="/wallet/send">
                    <IconButton icon={<Image src="./icons/cil_send.svg" width="32px"  /> }
                      borderRadius="full"
                      height={"50px"}
                      width={"50px"}
                      colorScheme={"redefine_green"}
                      bg={"redefine_green.500"}
                      border={"solid white 1px"}
                      _hover={{ bg: "white", color:"green.500" }}
                    />
                    <br />
                    <Text as={"span"} color={"white"}  fontSize={{ base: '12pt', md: '18pt', lg: '20pt' }}>
                    Enviar
                  </Text>
                  </Link>
                  <Link to="/punks">
                    <IconButton icon={<Image src="./icons/icon-park-outline_date-comes-back.svg" width="32px"  /> }
                        borderRadius="full"
                        height={"50px"}
                        width={"50px"}
                        colorScheme={"redefine_green"}
                        bg={"redefine_green.500"}
                        border={"solid white 1px"}
                        _hover={{ bg: "white", color:"green.500" }}
                      />
                      <br />
                      <Text as={"span"} color={"white"} align="center" fontSize={{ base: '12pt', md: '18pt', lg: '20pt' }}>
                      Movimientos
                    </Text>
                  </Link>
                  <Link to="/wallet/order">
                    <IconButton icon={<Image src="./icons/la_file-invoice-dollar.svg" width="32px"  /> }
                        borderRadius="full"
                        height={"50px"}
                        width={"50px"}
                        colorScheme={"redefine_green"}
                        bg={"redefine_green.500"}
                        border={"solid white 1px"}
                        _hover={{ bg: "white", color:"green.500" }}
                      />
                      <br />
                      <Text as={"span"} color={"white"} fontSize={{ base: '12pt', md: '18pt', lg: '20pt' }}>
                      Solicitar
                    </Text>
                  </Link>
                </SimpleGrid>
              </Stack>
            </>
          ) : (
            <Badge mt={2}>Wallet desconectado</Badge>
          )}
        </Stack>
        <Container>
          <Heading as='h2' size='lg' noOfLines={3} align="center" color="redefine_green.600">
              Movimientos
          </Heading>
          <Select placeholder='Select option' size='sm'>
            <option value='option1'>Últimas 24 hrs</option>
            <option value='option2'>Últimos 7 días</option>
            <option value='option3'>Último Mes</option>
          </Select>
          <Box  w='100%' p={4} border='1px' borderRadius="5" borderColor='redefine_green.600'>
            <SimpleGrid columns={2} spacing={2}>
              <Text fontWeight={600} fontSize={{ base: '10pt', md: '12pt', lg: '12pt' }} align="right" color="grey">
                <Image src="./icons/ph_coin.svg" width="32px"  />0x110aB178e....259bA2D5ea
              </Text>
            </SimpleGrid>
            <SimpleGrid columns={4} spacing={2}>
                <Text fontWeight={700} fontSize={{ base: '10pt', md: '12pt', lg: '12pt' }} align="right" color="grey">
                    0.0863
                    <Tag ml={2} colorScheme="gray" bg="redefine_green.600" color="white" size={"sm"} >
                      RDOC
                    </Tag>
                </Text>
                <Text fontWeight={600} fontSize={{ base: '10pt', md: '12pt', lg: '12pt' }} align="right" color="grey">
                    <CalendarIcon w={6} h={4} color="redefine_green.600" pl="5px"/>
                    05-Oct-2022
                    
                </Text>
                <Text fontWeight={600} fontSize={{ base: '10pt', md: '12pt', lg: '12pt' }} align="right" color="grey">
                  <CheckCircleIcon w={6} h={4} color="redefine_green.600" pl="5px"/>
                    Aceptada
                </Text>
                
              </SimpleGrid>
            
          </Box>
        </Container>
        
      </Stack>

    );
    };
    
    export default Wallet;