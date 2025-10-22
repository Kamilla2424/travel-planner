import { Box, Float, Square } from '@chakra-ui/react'

const Stickie = ({ text }) => {
    return (
        <Box position='relative' display='inline-block' _hover={{transform: 'rotate(-3deg)',  }} transition="all 0.2s">
        <Float placement='top-center'>
        <Square place w='10' h='4' bg='#99bac44e'/>
        </Float>
        <Box className='note' bgColor='red.100' borderRadius='xs' _hover={{bgColor: 'red.200'}} p='2' pl='4' pr='4' >
            {text}
        </Box>
        </Box>
    )
}

export default Stickie