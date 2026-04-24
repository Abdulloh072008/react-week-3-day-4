import {Card, Flex, Image, Text } from "@chakra-ui/react"
import Icon from "../shared/Icon"


const Imgforservece = ({ img, about}) => (
    <Card.Root display={{lg:"block",base:"none"}} border={"none"} p={5} color={"white"} bg={"#191919"}  flexDirection="column" overflow="hidden" w={{ lg: 655 }}>
        <Flex align={"center"} justify={"space-between"}>
            <Text fontSize={20}>{about}</Text>
            <Icon text={"View All"}/>
        </Flex>
        <Flex justify={"space-between"} mt={5}>
            <Image w={300} src={img}/> 
            <Image w={300} src={img}/> 
        </Flex>
    </Card.Root>
)

export default Imgforservece
