import { VStack, Input, Button } from "@chakra-ui/react"
import { PasswordInput, PasswordStrengthMeter } from "../Components/ui/password-input"
import GlassBox from "../Components/GlassBox"

const SignUp = () => {

    return (
        <VStack>
            <GlassBox bgColor='rgba(255, 255, 255, 0.25)' display='flex' flexDirection='column' gap='5' height='50vh' padding='10' mt='7'>
            <Input width='xs' border='1px solid rgba(255, 255, 255, 0.2)' boxShadow='inset 0 0 10px rgba(0, 0, 0, 0.1)' placeholder="Username"/>
            <Input border='1px solid rgba(255, 255, 255, 0.2)' boxShadow='inset 0 0 10px rgba(0, 0, 0, 0.1)' placeholder="Email Address"/>
            <PasswordInput border='1px solid rgba(255, 255, 255, 0.2)' boxShadow='inset 0 0 10px rgba(0, 0, 0, 0.1)'placeholder='Password'/>
            <PasswordInput border='1px solid rgba(255, 255, 255, 0.2)' boxShadow='inset 0 0 10px rgba(0, 0, 0, 0.1)'placeholder='Re-type password'/>
            <Button textShadow='1px 1px 5px #0000009b' color='#fffad6' variant='plain' border='1px solid rgba(255, 255, 255, 0.2)' boxShadow='inset 0 0 10px rgba(0, 0, 0, 0.1)' _hover={{bg: 'rgba(255, 255, 255, 0.2)'}}>Sign Up</Button>
            </GlassBox>
        </VStack>
    )
}

export default SignUp