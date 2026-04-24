import { Box, Text } from '@chakra-ui/react'

const Tilte = ({text,icon}) => {
    return (
        <>
            <Box display={"flex"} alignItems={"center"} pr={10} justifyContent={"space-between"} bg={"#191919"} py={{lg:10,base:5}} rounded={10}>
                <Text lineHeight={"110%"} fontSize={{lg:38,base:28}} fontWeight={600} px={{lg:50 , base:5}} color={"white"}>{text}</Text>
                <div className='lg:bloxk hidden'>
                    {icon}
                </div>
            </Box>
        </>
    )
}

export default Tilte
