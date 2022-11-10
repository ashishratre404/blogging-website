import React from 'react';

import TopBar from './components/topbar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import About from './components/about/About';
import Contact from './components/contact/Contact';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const user = true;

  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/contact' element={<Contact />} />
          <Route  path='/post/:postId' element={<Single />} />
          <Route path='/write' element={user ?<Write /> : <Register />} />
          <Route path='/register' element={user ?<Home /> : <Register />} />
          <Route path='/register' element={user ?<Home /> : <Register />} />
          <Route path='/login' element={user ?<Home /> : <Login />} />
          <Route path='/setting' element={user ?<Setting /> : <Register />} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
