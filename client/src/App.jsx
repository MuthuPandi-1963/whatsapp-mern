import {Button} from '@/components/ui/button'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Index'
import Profile from './pages/profile/Index'
import Main from './layout/Main'
import Interface from './layout/Interface'
import ChatLayout from './pages/chat/Layout'
import AuthLayout from './pages/auth/Layout'
export default function App() {
  return (
    <Main>
      <Interface>

    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/auth' element={<AuthLayout/>}/>
      <Route path='/chat' element={<ChatLayout/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
      </Interface>
    </Main>
  )
}
