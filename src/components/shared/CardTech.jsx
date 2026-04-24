import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

const CardTech = () => {
    return (
        <>
            <Flex direction="column" justify={"center"} gap={4} w={400} display={{lg:"flex",base:"none"}} >

                <Box bg="#191919" p={6} py={4} rounded="xl">
                    <Text color="white" fontSize="18px" mb={4}>
                        TECHNOLOGIES USED
                    </Text>

                    <Flex wrap="wrap" gap={3}>

                        <Button bg="#222" color="#ddd" rounded="full" px={5} py={1} _hover={{ bg: "#2a2a2a" }}>
                            React Native
                        </Button>

                        <Button bg="#222" color="#ddd" rounded="full" px={5} py={1} _hover={{ bg: "#2a2a2a" }}>
                            Firebase
                        </Button>

                        <Button bg="#222" color="#ddd" rounded="full" px={5} py={1} _hover={{ bg: "#2a2a2a" }}>
                            Redux
                        </Button>

                        <Button bg="#222" color="#ddd" rounded="full" px={5} py={1} _hover={{ bg: "#2a2a2a" }}>
                            REST API
                        </Button>

                        <Button bg="#222" color="#ddd" rounded="full" px={5} py={1} _hover={{ bg: "#2a2a2a" }}>
                            MongoDB
                        </Button>

                    </Flex>
                </Box>

                <Box bg="#191919" p={6} py={3} rounded="xl">
                    <Flex align="center" justify="space-between">

                        <Text color="white" fontSize="18px">
                            TEAM MEMBERS
                        </Text>

                        <Flex>
                            <Image
                                src="https://i.pravatar.cc/45?img=1"
                                w="45px"
                                h="45px"
                                rounded="full"
                                border="2px solid #191919"
                            />

                            <Image
                                src="https://i.pravatar.cc/45?img=2"
                                w="45px"
                                h="45px"
                                rounded="full"
                                border="2px solid #191919"
                                ml="-10px"
                            />

                            <Image
                                src="https://i.pravatar.cc/45?img=3"
                                w="45px"
                                h="45px"
                                rounded="full"
                                border="2px solid #191919"
                                ml="-10px"
                            />

                            <Image
                                src="https://i.pravatar.cc/45?img=4"
                                w="45px"
                                h="45px"
                                rounded="full"
                                border="2px solid #191919"
                                ml="-10px"
                            />

                            <Image
                                src="https://i.pravatar.cc/45?img=5"
                                w="45px"
                                h="45px"
                                rounded="full"
                                border="2px solid #191919"
                                ml="-10px"
                            />
                        </Flex>

                    </Flex>
                </Box>

                <Button
                    bg="#D07C66"
                    color="black"
                    h="50px"
                    fontSize="16px"
                    rounded="xl"
                    _hover={{ bg: "#c46f5a" }}
                >
                    BOOK A CALL
                </Button>

            </Flex>
        </>
    )
}

export default CardTech
