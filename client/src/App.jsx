import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import GlassBox from './Components/GlassBox'
import Plan from './Pages/Plan'

function App() {
  return (
    <>
    <GlassBox height='90vh' width='95%' position='absolute'>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='/plan' element={<Plan/>}/>
    </Routes>
    </GlassBox>
    </>
  )
}

export default App;