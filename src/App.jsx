
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { AuthProvider } from './config/AuthProvider'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Login from './components/organics/Login'
import Register from './components/organics/Register'
import Posts from './pages/Posts'

function App() {

  return (
    <BrowserRouter>
            <AuthProvider>
                    <Routes>
                        <Route element={<MainLayout/>}>
                            <Route path="/" element={<Home/>}></Route>
                            <Route path="/auth/login" element={<Login/>}/>
                            <Route path="/auth/register" element={<Register/>}/>
                            <Route path="/posts" element={<Posts/>}></Route>
                        </Route>
                    </Routes>
            </AuthProvider>
        </BrowserRouter>
  )
}

export default App
