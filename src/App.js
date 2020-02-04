import React from 'react';

import HomePage from "./pages/HomePage";
import Contact from "./components/ContactPage/contact";
import NavBar from "./components/NavBar/navbar";
import {Route} from "react-router-dom";
import SocialMedia from "./components/SocialMedia/socialmedia";
import Footer from "./components/Footer/footer";

import './App.css';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <SocialMedia/>
      <Footer/>

    </div>
  );
}

export default App;
