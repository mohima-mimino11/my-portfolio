
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
    
      <div className='min-h-screen mx-auto bg-gradient-to-r from-[#C5CBD3] to-[#DADDD8]'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>

      </div>
      
      
    </>
  )
}

export default App
