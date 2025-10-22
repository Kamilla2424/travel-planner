'use client'
import system from '../../theme'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

export function Provider({children}) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  )
}