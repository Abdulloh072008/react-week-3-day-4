import shape from "../../assets/images/Shape1.png"
import { Flex, Image, Text } from '@chakra-ui/react'


const WebDesign = () => {
    return (
        <>
            <Flex bg={"#0F0F0F"} align={"center"}  justify={"space-evenly"} w={{lg:890,base:"full"}} py={4} rounded={10}>
                <Text>Website Design</Text>
                <Image src={shape} alt="" />
                <Text>Branding</Text>
                <Image display={{lg:"block",base:"none"}} src={shape} alt="" />
                <Text  display={{lg:"block",base:"none"}}>Website Development</Text>
                <Image display={{lg:"block",base:"none"}} src={shape} alt="" />
                <Text  display={{lg:"block",base:"none"}}>Mobile App Development</Text>
                <Image display={{lg:"block",base:"none"}} src={shape} alt="" />
                <Text  display={{lg:"block",base:"none"}}>Digital Marketing</Text>
            </Flex>

        </>
    )
}

export default WebDesign
