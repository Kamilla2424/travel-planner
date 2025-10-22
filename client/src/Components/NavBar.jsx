import { Heading, Link, Box, HStack, Text } from '@chakra-ui/react'
import '../App.css'
import { UserContext } from '../Components/UserContext'
import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const { loggedInUser } = useContext(UserContext);
    const location = useLocation().pathname;
    const navigate = useNavigate();
    
        const handleClick = () => {
            navigate('/');
        }

    return (
        <>
        {location === '/' ? 
        <HStack fontSize='3xl' gap={{base: '3', 3: '10'}} zIndex='2' position='absolute' top='12' right='10'>
            <Link href='/plan' color='#fffad6'>PLAN</Link>
            <Text>|</Text>
            {loggedInUser ? 
            <>
            <Link href='/mytrips' color='#fffad6'>MY TRIPS</Link>
            <Text>|</Text>
            <Link href='/myaccount' color='#fffad6'>MY ACCOUNT</Link>
            </>
            :
            <Link href='/login' color='#fffad6'>LOGIN</Link>
            }   
        </HStack>
         :
        <Box display='grid' justifyItems='center'>
            <Heading onClick={handleClick} mt='14' mb='6' fontSize='5xl'>Voyage</Heading>
            <HStack color='shade.600' gap='20' fontSize='2xl'>
            <Link href='/plan' color='#fffad6'>PLAN</Link>
            {loggedInUser ? 
            <>
            <Link href='/mytrips' color='#fffad6'>MY TRIPS</Link> 
            <Link href='/myaccount' color='#fffad6'>MY ACCOUNT</Link>
            </>
            :
            <Link href='/login' color='#fffad6'>LOG IN</Link>}
            </HStack>
        </Box>
        }   
        </>
    )
}

export default NavBar
