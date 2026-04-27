import { Box, Flex, Text } from '@chakra-ui/react'
import WebDesign from '../ChakraComponents/WebDesign'
import Cards from '../ChakraComponents/Cards'
import Tilte from '../shared/Tilte'
import CardOuerservese from '../ChakraComponents/CardOuerservese'
import icon5 from "../../assets/images/Icon Container5.png"
import Imgforservece from '../ChakraComponents/Imgforservece'
import contaner from "../../assets/images/Container12.png"
import contaner1 from "../../assets/images/Container13.png"
import contaner2 from "../../assets/images/Container14.png"
import contaner3 from "../../assets/images/Container15.png"
import CardOurworks from '../shared/CardOurworks'
import SwiperSlide1 from './../ChakraComponents/SwiperSlide1';



const Main = () => {
  return (
    <>
      <main>
        <section>
          <Box maxW={1360} m={"auto"} w={"90%"}>
            <Flex direction={{ lg: "row", base: "column" }} gap={5} justify={"space-between"} color={"white"}>
              <Flex direction={"column"} gap={5} bg={"#191919"} rounded={10} pt={3} px={{ lg: 8, base: 5 }}>
                <Text fontSize={{ lg: 58, base: 28 }} fontWeight={600}>Our Comprehensive</Text>
                <Text fontSize={{ lg: 58, base: 28 }} fontWeight={600}>Digital Solutions</Text>
                <Text fontSize={16} color={"gray"} w={{ lg: 730, base: "full" }}>At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation</Text>
                <Box mt={"50px"} pb={3}>
                  <WebDesign />
                </Box>
              </Flex>
              <Box>
                <Cards />
              </Box>
            </Flex>

          </Box>
        </section>

        <section>
          <Box border={"2px solid #191919"} rounded={10} p={3} maxW={1360} m={"auto"} w={"90%"} mt={"16"}>
            <Tilte text={"Our Services"} />
            <Flex justify={"space-between"} wrap={"wrap"} mt={10} gap={5}>
              <Flex w={"full"} justify={"space-between"}>
                <CardOuerservese job={"Web Design"} about={"Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting."} price={"Starts From $1,500"} img={icon5} />
                <Imgforservece about={"Web Design Projects"} img={contaner} />
              </Flex>
              <Flex w={"full"} justify={"space-between"}>
                <CardOuerservese job={"Mobile App Development"} about={"With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications ."} price={"Starts From $2,500"} img={icon5} />
                <Imgforservece about={"Mobile App Development Projects"} img={contaner1} />
              </Flex>
              <Flex w={"full"} justify={"space-between"}>
                <CardOuerservese job={"Web Design"} about={"Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting."} price={"Starts From $1,500"} img={icon5} />
                <Imgforservece about={"Web Design Projects"} img={contaner2} />
              </Flex>
              <Flex w={"full"} justify={"space-between"}>
                <CardOuerservese job={"Web Design"} about={"Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting."} price={"Starts From $1,500"} img={icon5} />
                <Imgforservece about={"Web Design Projects"} img={contaner3} />
              </Flex>
            </Flex>
          </Box>
        </section>

        <section>
          <Box maxW={1360} m={"auto"} w={"90%"}>
            <Tilte text={"Our Works"} />
            <Flex align={"center"}>
              <Flex mt={4} border={"2px solid #191919"} wrap={"wrap"} rounded={10} p={3}>
                <Box>
                  <CardOurworks text={"Klothink"} />
                </Box>
              </Flex>
            </Flex>
          </Box>
        </section>

        <section>
          <Box maxW={1360} m={"auto"} w={"90%"} py={10}>
            <Tilte text={"Our Works"} />
            <Flex mt={5} justify={"space-between"}>
              <SwiperSlide1 />
            </Flex>
          </Box>
        </section>
      </main>
    </>
  )
}

export default Main
