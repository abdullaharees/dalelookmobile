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


function App() {
  return (
    <div className="tajawal">
      <Router>
        <Routes>

          <Route path="/" element={<Homepage />} />           

            <Route path='/category' element={<Categorypage />} />
            <Route path='/packages' element={<Homepackages />} />
            <Route path='/cardpage' element={<Cardpage />} />
            <Route path='/proceed' element={<Homeproceed />} />
            <Route path='/product' element={<Homeproduct />} />



        </Routes>
      </Router>
    </div>
  );
}
export default App;
