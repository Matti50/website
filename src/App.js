import React from 'react';

import NavBar from "./components/NavBar/navbar";
import Header from "./components/Header/header";
import Story from "./components/Story/story";
import SocialMedia from "./components/SocialMedia/socialmedia";
import Footer from "./components/Footer/footer";
import Contact from "./components/ContactPage/contact";

import {Router,Switch,Route} from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App">
    
      <NavBar/>
      <Switch>
        <Route exact path="/">  
          <Header/>
          <Story/>
          <SocialMedia/>
          <Footer/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>  
      </Switch>  
      
      
      

    </div>
  );
}

export default App;
