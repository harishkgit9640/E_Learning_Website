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
import Error from './Component/Error';
import { Routes, Route } from 'react-router-dom';
import Registration from './Component/Registration';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Course />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
