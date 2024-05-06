import './App.css';
import {Routes,Route,Outlet, Navigate} from 'react-router-dom'
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
import { useAuthContext } from './hooks/useAuthContext';
import Loader from './components/loader/Loader';
import { useEffect,useState } from 'react';


const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

const App = () => {
const { user } = useAuthContext()
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      await new Promise((resolve) => resolve());
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  };
  fetchData();
}, []);

if (loading) {
  return <Loader />;
}
  
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
      <Route path='/' element={<Home />} ></Route>
      <Route path='/hikes' element={<UpcomingHikes />}></Route>
      <Route path='/images' element={<PhotoGallery />}></Route>
      <Route path='/F&Q' element={<Questions />}></Route>
      <Route path='/signup/signin' element={!user ? <ContactUs /> : <Navigate to={'/'} />}></Route >
      <Route path='/booking' element={user ? <Booking /> : <Navigate to={'/'} />}></Route >
      </Route>
      <Route path='/admin/home' element={user && !user.hasOwnProperty('phoneNumber') ? <Admin /> : <Navigate to={'/'} />}></Route>
      <Route path='/admin' element={<AdminLogin />}></Route>
    </Routes>
  )
}

export default App