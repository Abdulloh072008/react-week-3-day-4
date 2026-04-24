import { Button, Card, Flex, Image, Text } from "@chakra-ui/react"


const CardOuerservese = ({ img, about, job, price, }) => (
    <Card.Root border={"none"} p={5} color={"white"} bg={"#191919"} flexDirection="column" overflow="hidden" w={{ lg: 655 }}>
        <Card.Body display={"flex"} flexDirection={"column"} gap={5}>
            <Flex align={{lg:"center"}} wrap={"wrap"} gap={3} justify={"space-between"}>
                <Flex align={"center"} gap={2}>
                    <Image src={img} alt="" />
                    <Text fontSize={22} fontWeight={500}>{job}</Text>
                </Flex>
                <Text display={{ lg: "none",base:"flex" }} w={"full"} textAlign={"right"} fontSize={22} fontWeight={500}>{price}</Text>
            </Flex>
            <Card.Description w={{ lg: 450 }}>
                {about}
            </Card.Description>
            <Text display={{ lg: "block", base: "none" }} w={"full"} textAlign={"right"} fontSize={22} fontWeight={500}>{price}</Text>
            <Button w={"full"} variant={"surface"} bg={"#CE7D63"} border={"none"} py={6} display={{ lg: "none", base: "flex" }}>Book A Call</Button>
        </Card.Body>
    </Card.Root>
)

export default CardOuerservese
