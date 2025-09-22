import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Servicos from './components/pages/Servicos'
import SobreNos from './components/pages/SobreNos'
import FaleConosco from './components/pages/FaleConosco'
import './App.css'

function App() {
  return (
    <>
      <div className='app'>
        <Header/>
        <main className = 'container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/servicos' element={<Servicos/>}/>
            <Route path='/sobre-nos' element={<SobreNos/>}/>
            <Route path='/fale-conosco' element={<FaleConosco/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
      
    </>
  )
}

export default App