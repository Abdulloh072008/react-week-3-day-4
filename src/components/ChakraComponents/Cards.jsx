import { Card, Image } from "@chakra-ui/react"
import sub from "../../assets/images/Sub Container1.png"


const Cards = () => {
    return (
        <Card.Root bg={"#1F1F1F"} border={"none"} color={"white"} position={"relative"} maxW="sm" overflow="hidden">
            <Image 
            src={sub}
                alt="Green double couch with wooden legs"
            />
        </Card.Root>
    )
}

export default Cards
