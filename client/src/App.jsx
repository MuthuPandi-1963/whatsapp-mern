import {Button} from '@/components/ui/button'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Index'
import Chat from './pages/chat/Index'
import Profile from './pages/profile/Index'
import Main from './layout/Main'
import Interface from './layout/Interface'
import AuthPage from './pages/auth/Index'
export default function App() {
  return (
    <Main>
      <Interface>

    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
      </Interface>
    </Main>
  )
}
