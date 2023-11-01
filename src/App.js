import './App.css';
import {Routes,Route,Outlet} from 'react-router-dom'
import Home from './pages/Home/Home'
import PhotoGallery from './pages/PhotoGallery/PhotoGallery'
import Questions from './pages/Questions/Questions'
import UpcomingHikes from './pages/UpcomingHikes/UpcomingHikes'
import ContactUs from './pages/ContactUs/ContactUs'
import Navbar from './navbar/Navbar';





const App = () => {
  const Layout = () => {
    return (
      <>
      <Navbar />
      <Outlet />
      </>
    )
  }
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
      <Route path='/' element={<Home />} ></Route>
      <Route path='/hikes' element={<UpcomingHikes />}></Route>
      <Route path='/images' element={<PhotoGallery />}></Route>
      <Route path='/F&Q' element={<Questions />}></Route>
      <Route path='/ContactUs' element={<ContactUs />}></Route >
      </Route>
    </Routes>
  )
}

export default App