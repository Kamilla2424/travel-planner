import { VStack, Input, InputGroup, Field, Button, Text, Link } from "@chakra-ui/react"
import { UserContext } from '../Components/UserContext'
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { LuUser } from "react-icons/lu"
import { PasswordInput, PasswordStrengthMeter } from "../Components/ui/password-input"
import { loginUser } from '../../utils'
import GlassBox from "../Components/GlassBox"

const Login = () => {
    const { setLoggedInUser } = useContext(UserContext)
    const [password, setPassword] = useState("")
    const [username, setUseremailInput] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/signup')
    }

    const handleUEInput = (e) => {
        setUseremailInput(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        setLoading(true)
        loginUser({username, password}) 
        .then(({user}) => {
            setLoggedInUser(user)
            navigate("/")
        }) 
        .catch((err) => {
            console.error(err)
        })
    }

    return (
        <VStack>
        <GlassBox bgColor='rgba(255, 255, 255, 0.25)' display='flex' flexDirection='column' gap='5' height='50vh' padding='20' mt='7'>
        <InputGroup startElement={<LuUser/>}>
            <Input border='1px solid rgba(255, 255, 255, 0.2)' boxShadow='inset 0 0 10px rgba(0, 0, 0, 0.1)' width='xs' onChange={handleUEInput} placeholder="Username/ Email Address"/>
        </InputGroup>
        <PasswordInput placeholder='Password' border='1px solid rgba(255, 255, 255, 0.2)' boxShadow='inset 0 0 10px rgba(0, 0, 0, 0.1)' onChange={handlePasswordInput}/>
        <Button size='lg' textShadow='1px 1px 5px #0000009b' color='#fffad6' variant='plain' border='1px solid rgba(255, 255, 255, 0.2)' boxShadow='inset 0 0 10px rgba(0, 0, 0, 0.1)' _hover={{bg: 'rgba(255, 255, 255, 0.2)'}} onClick={handleSubmit}>Log In</Button>
        <Text mt='4' mb='-4' >Don't have a account?</Text>
        <Button size='lg' textShadow='1px 1px 5px #0000009b' color='#fffad6' variant='plain' border='1px solid rgba(255, 255, 255, 0.2)' boxShadow='inset 0 0 10px rgba(0, 0, 0, 0.1)' _hover={{bg: 'rgba(255, 255, 255, 0.2)'}} onClick={handleClick} href='signup'>Sign Up</Button>
        </GlassBox>
        </VStack>
    )
}

export default Login