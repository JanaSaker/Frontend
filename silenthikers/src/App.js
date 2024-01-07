import './App.css';
import {Routes,Route,Outlet} from 'react-router-dom'
import Home from './pages/Home/Home'
import PhotoGallery from './pages/PhotoGallery/PhotoGallery'
import Questions from './pages/Questions/Questions'
import UpcomingHikes from './pages/UpcomingHikes/UpcomingHikes'
import ContactUs from './pages/ContactUs/ContactUs'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Admin from './pages/Admin/Admin';
import Booking from './pages/booking/Booking';
import AdminLogin from './pages/Admin/AdminLogin';



const App = () => {
  const Layout = () => {
    return (
      <>
      <Navbar />
      <Outlet />
      <Footer />
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
      <Route path='/signup/signin' element={<ContactUs />}></Route >
      <Route path='/booking' element={<Booking />}></Route >
      </Route>
      <Route path='/admin/home' element={<Admin />}></Route>
      <Route path='/admin' element={<AdminLogin />}></Route>
    </Routes>
  )
}

export default App