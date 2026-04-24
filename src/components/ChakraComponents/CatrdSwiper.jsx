import { Box, Flex, Text, Spacer, VStack, Heading } from "@chakra-ui/react" 

const CardSwiper = () => {
    return (
        <Box maxW="330px"  bg="#191919" borderRadius="20px" overflow="hidden" color="white">

            <VStack align="flex-start" spacing="20px" p="30px">
                <Heading as="h2" size="md" letterSpacing="wide" fontWeight="bold">NEXGEN TURNED OUR BUSINESS AROUND!</Heading>
                <Text color="#A0A0A0" fontSize="16px" lineHeight="1.5">Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</Text>
            </VStack>

            <Flex bg="#1F1F1F" p="25px" align="center" borderTop="1px solid #2D2D2D">
                <Box>
                    <Text fontWeight="bold" fontSize="18px">Sarah Thompson</Text>
                    <Text fontSize="14px" color="#666666">CEO of BlueBloom</Text>
                </Box>
                <Spacer />
            </Flex> 
        </Box>
    );
};

export default CardSwiper