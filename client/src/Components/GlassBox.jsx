import { Box } from "@chakra-ui/react";

const GlassBox = ({children, ...props}) => {
    return (
        <Box {...props} justifyContent='center' rounded='md' alignItems='center' backdropFilter='blur(10px)' boxShadow='0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)' border='2px solid rgba(255, 255, 255, 0.18)' top='5%' left='3%'>{children}</Box>
    )
}

export default GlassBox;