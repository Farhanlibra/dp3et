
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import Feature from './component/Feature'
import Price from './component/Price'
import Review from './component/Review'
import Contact from './component/Contact'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/feature' element={<Feature/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/Review' element={<Review/>}/>
        <Route path='/contact' element={<Contact/>}/>


      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
