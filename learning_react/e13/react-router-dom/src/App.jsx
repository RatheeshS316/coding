import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Users from './pages/users';
import Userrrr from './pages/user';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user" element={<Userrrr />} />
        <Route path="/user/:username" element={<Userrrr />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
