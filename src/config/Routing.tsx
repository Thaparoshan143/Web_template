import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Routing = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/*" element={<Home />} />
    </Routes>
    <Footer />
    </>
  )
}

export default Routing