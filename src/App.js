import React from 'react'

import "./Fonts/Tajawal-Black.ttf"
import "./Fonts/Tajawal-Bold.ttf"
import "./Fonts/Tajawal-ExtraBold.ttf"
import "./Fonts/Tajawal-ExtraLight.ttf"
import "./Fonts/Tajawal-Light.ttf"
import "./Fonts/Tajawal-Medium.ttf"
import "./Fonts/Tajawal-Regular.ttf"

import { Route, Routes, BrowserRouter as Router  } from "react-router-dom";

import Homepage from './Components/Home/Homepage'
import Categorypage from './Components/Home/Categorypage'
import Homepackages from './Components/Bank/Homepackages'
import Cardpage from './Components/Bank/Cardpage'
import Homeproceed from './Components/Bank/Homeproceed'
import Homeproduct from './Components/Realestate/Homeproduct'
import Homeprofilem from './Components/Profile/Homeprofilem'
import Signup from './Components/Login/Signup'
import Login from './Components/Login/Login'
import Convo from './Components/Conversation/Convo'
import Mainconvo from './Components/Conversation/Mainconvo'
import ScrollToTop from './ScrollToTop'
import Homepageem from './Components/Emiratesmobile/Homeem/Homepageem'
import Homeprofileem from './Components/Emiratesmobile/Profileem/Homeprofilem'
import Categorypageem from './Components/Emiratesmobile/Homeem/Categorypageem'
import Homeproceedem from './Components/Emiratesmobile/Bank/Homeproceedem'

function App() {
  return (
    <div className="tajawal">
      <Router>
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<Homepage />} />           

            <Route path='/category' element={<Categorypage />} />
            <Route path='/packages' element={<Homepackages />} />
            <Route path='/cardpage' element={<Cardpage />} />
            <Route path='/proceed' element={<Homeproceed />} />
            <Route path='/product' element={<Homeproduct />} />
            <Route path='/profile' element={<Homeprofilem />} />
            <Route path='/convo' element={<Convo />} />
            <Route path='/mainconvo' element={<Mainconvo />} />

            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />

            <Route path='/homeem' element={<Homepageem />} />
            <Route path='/profileem' element={<Homeprofileem />} />
            <Route path='/categoryem' element={<Categorypageem />} />
            {/* <Route path='/productem' element={<Homeproductem />} /> */}
            <Route path='/proceedem' element={<Homeproceedem />} />

        </Routes>
      </Router>
    </div>
  );
}
export default App;
