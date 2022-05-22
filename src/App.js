import React from "react";
import Button from "@material-ui/core/Button"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} 
from "react-router-dom";
import  Skills  from "./components/Skills";
import Home from "./components/Home";
import  Videos  from "./components/Videos";
import { AppBar,Toolbar, IconButton, MenuIcon, Typography } from "@material-ui/core";
import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {VideoCard} from "material-ui-player";
import { CardMedia } from "@material-ui/core";

function App() {
  return (
//     <Router>
// <div> 
//   <div>
// <img src = "https://www.canva.com/design/DAE_p2ei3RQ/ZhuKJ88RGMExzSoHKVslCQ/view?utm_content=DAE_p2ei3RQ&utm_campaign=celebratory_first_publish&utm_medium=link&utm_source=celebratory_first_publish" width={60} alt = "wedding"/>

//   <AppBar position="static">
//   <Toolbar variant="dense">
//     <IconButton edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }}  style={{ flex : 1}}>
//     <Button  variant="contained" color="primary" component={Link} to = {"/"}>
//       Home
//     </Button>
//     <Button variant="contained" color="primary" component={Link} to = {"/Skills"}>
//       SKills
//     </Button>
//     <Button variant="contained" color="primary" component={Link} to = {"/"}>
//      videos
//     </Button>
//     </IconButton>       
//     <a href="/">  Home
//     </a>
//     <a href="/skills">Skills
//     </a>
//     <a href="/videos">

//     </a>

// <Routes>
//     <Route path = "/"  exact element = { <Home/> }>Home</Route>
//     <Route path = "/Skills" exact element = {<Skills/>}>Skills</Route>
//     <Route path = "/Videos" exact element = {<Videos/>}>Videos</Route>

// </Routes>
//   </Toolbar>
// </AppBar>
// <Videos/>  

// <video src= {{video}}></video>
// </div>

// </div>
// </Router>
<div>
  <Navbar/>
  <Footer/>
</div>
  );
}

export default App;
