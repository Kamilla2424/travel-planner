import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<ChakraProvider theme={theme}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ChakraProvider>
)
