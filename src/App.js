import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Course from './Component/Course';
import Contact from './Component/Contact';
import Blog from './Component/Blog';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Register from './Component/Register';
import Error from './Component/Error';
// import Faq from './Component/Faq';
// import Footer from './Component/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Course />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
