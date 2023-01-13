import React from 'react';
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";


const App = () => (
  <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
    <Footer/>
  </div>
)

export default App;
