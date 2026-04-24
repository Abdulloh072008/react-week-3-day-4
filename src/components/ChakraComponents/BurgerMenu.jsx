import { Button, CloseButton, Drawer, Flex, Portal } from "@chakra-ui/react"
import { Menu } from "lucide-react"


const BurgerMenu = () => {
    return (
        <Drawer.Root>
            <Drawer.Trigger asChild>
                <Menu size={24} color="white" />
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content bg={"#191919"}>
                        <Drawer.Header>
                            <Drawer.Title color={"white"}>Drawer Title</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <Flex direction={"column"} gap={3}>
                                <Button color={"#81807E"} bg={"#0F0F0F"}>Home</Button>
                                <Button color={"#81807E"} bg={"#0F0F0F"}>Services</Button>
                                <Button color={"#81807E"} bg={"#0F0F0F"}>Projects</Button>
                                <Button color={"#81807E"} bg={"#0F0F0F"}>About</Button>
                                <Button color={"#81807E"} bg={"#0F0F0F"}>Careers</Button>
                                <Button color={"#81807E"} bg={"#0F0F0F"}>Blogs</Button>
                                <Button bg={"#CE7D63"} >Contact Us</Button>
                            </Flex>
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Button variant="outline" colorPalette={"red"}>Cancel</Button>
                            <Button colorPalette={"blue"}>Save</Button>
                        </Drawer.Footer>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}

export default BurgerMenu
