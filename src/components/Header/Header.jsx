import logo from "../../assets/images/Logo31.png"
import { Box, Button, Flex, Image } from '@chakra-ui/react'
import BurgerMenu from '../ChakraComponents/BurgerMenu';

const Header = () => {
    return (
        <>
            <header>
                <Flex py={5}>
                    <Flex maxW={1360} m={"auto"} w={"90%"} bg={"#191919"} justify={"space-between"} align={"center"} p={4} rounded={{ lg: 15, base: 5 }}>
                        <Box>
                            <Image src={logo} alt="" />
                        </Box>
                        <Flex display={{ lg: "flex", base: "none" }} align={"center"} gap={3}>
                            <Button color={"#81807E"} bg={"#0F0F0F"}>Home</Button>
                            <Button color={"#81807E"} bg={"#0F0F0F"}>Services</Button>
                            <Button color={"#81807E"} bg={"#0F0F0F"}>Projects</Button>
                            <Button color={"#81807E"} bg={"#0F0F0F"}>About</Button>
                            <Button color={"#81807E"} bg={"#0F0F0F"}>Careers</Button>
                            <Button color={"#81807E"} bg={"#0F0F0F"}>Blogs</Button>
                            <Button bg={"#CE7D63"} >Contact Us</Button>
                        </Flex>
                        <Box display={{lg:"none"}}>
                            <BurgerMenu />
                        </Box>
                    </Flex>
                </Flex>
            </header >
        </>
    )
}

export default Header
