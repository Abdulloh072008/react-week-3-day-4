import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import icon6 from "../../assets/Images/Icon Container (6).png"

const CardOurworks = ({text}) => {
    return (
        <>
            <Flex
                bg="#0F0F0F"
                p={4}
                rounded="xl"
                gap={2}
                w={595}
                maxW="900px"
                 mt={3}
                 flexDirection={{lg:"row",base:"column-reverse"}}
            >
                <Flex
                    direction="column"
                    justify="space-between"
                    bg="#191919"
                    p={6}
                    rounded="xl"
                    flex="1"
                >
                    <Flex justify="space-between" flexDirection={{lg:"row",base:"column"}} gap={5} align={{lg:"center",base:"start"}}>
                        <Flex align="center" gap={3}>
                            <Image w={50} h={50} src={icon6} />

                            <Text fontSize="18px" color="white" fontWeight="500">
                                {text}
                            </Text>
                        </Flex>

                        <Flex align="center" gap={2} color="#A1A1A1" cursor="pointer">
                            <Box
                                w="32px"
                                h="32px"
                                border="1px solid #333"
                                rounded="full"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <ArrowUpRight size={16} />
                            </Box>

                            <Text fontSize="14px">DETAILS</Text>
                        </Flex>
                    </Flex>

                    <Flex direction="column" gap={3} mt={5}>
                        <Flex bg="#222" px={4} py={2} rounded="full" w="fit-content" gap={2}>
                            <Text color="#888">Category</Text>
                            <Text color="#DA9E8B">•</Text>
                            <Text color="white">Mobile App Development</Text>
                        </Flex>

                        <Flex bg="#222" px={4} py={2} rounded="full" w="fit-content" gap={2}>
                            <Text color="#888">Time Taken</Text>
                            <Text color="#DA9E8B">•</Text>
                            <Text color="white">6 months</Text>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </>
    )
}

export default CardOurworks
