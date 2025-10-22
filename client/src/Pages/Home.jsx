import { Flex ,Heading, Image, Link } from "@chakra-ui/react"
import polaroidOne from '../../src/images/Polaroid 1.png'
import polaroidTwo from '../../src/images/Polaroid 2.png'
import polaroidThree from '../../src/images/Polaroid 3.png'

const Home = () => {
    return (
        <>
        <Flex height='90vh' justify='center' align='center'>
        <Heading zIndex='1' fontWeight='normal' fontSize={{base: '8xl', 2: '9xl', 3: '150px',}}>Voyage</Heading>
        <Image right='65%' top='45%' zIndex='0' position='absolute' src={polaroidOne} height={{base: '150px', 2: '200px', 3: '250px'}}></Image>
        <Image left='55%'top='20%' zIndex='0' position='absolute' src={polaroidTwo} height={{base: '150px', 2: '200px', 3: '250px'}}></Image>
        <Image left='65%'top='35%' zIndex='0' position='absolute' src={polaroidThree} height={{base: '150px', 2: '200px', 3: '250px'}}></Image>
        </Flex>
        </>
    )
}

export default Home

// <VStack align='flex-end' padding='7' minH="100vh" position="relative">
        // <Heading fontSize='8xl' pt='20'>Voyage</Heading>
        //     <Flex direction='column' color='shade.600' gap='14' position='absolute' bottom='10' fontSize='4xl' align='flex-end'>
        //         <Link href='destinations' _hover={{_before: { width: '0%'}}}>
        //             <Stickie text='Destinations'/>
        //         </Link>
        //         {loggedInUser ?
        //         <>
        //         <Link href='mytrips' _hover={{_before: { width: '0%'}}}>
        //             <Stickie text='My Trips'/>
        //         </Link> 
        //         <Link href='myaccount' _hover={{_before: { width: '0%'}}}>
        //             <Stickie text='My Account'/>
        //         </Link> 
        //         </>
        //         : 
        //         <Link href='login' _hover={{_before: { width: '0%'}}}>
        //             <Stickie text='Log in'/>
        //         </Link>}
        //     </Flex>
        // </VStack>