import { useState } from 'react'
import  { Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import CadastroPage from './pages/CadastroPage'
import ListaUsuariosPage from './pages/ListaUsuariosPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <Header />
    <mains className="main-content">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cadastro' element={<CadastroPage />} />
        <Route path='/usuarios' element={<ListaUsuariosPage />} />
      </Routes>
    </mains>
    <Footer />
     
    </>
  )
}

export default App