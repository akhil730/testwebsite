import React from "react";
import { AppBar,Toolbar, IconButton, MenuIcon, Typography } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } 
from "react-router-dom";
import Button from "@material-ui/core/Button"
import  Skills  from "./Skills";
import Home from "./Home";
import Videos  from "./Videos";
import "../App.css"

export default function Navbar() {
    return(

//         <Router>
          
//           <a href="/">  <Button variant="contained" color="green" component="div">
//       Home
//     </Button>
//     </a>
//     <a href="/skills">
//     <Button variant="contained" color="green" component="div">
//       About us
//     </Button>
//     </a>
//     <a href="/videos">
//     <Button variant="contained" color="green" component="div">
//       Videos
//     </Button>
//     </a>
// <Routes>
//     <Route path = "/"  exact element = { <Home/> }>Home</Route>
//     <Route path = "/Skills" exact element = {<Skills/>}>Skills</Route>
//     <Route path = "/Videos" exact element = {<Videos/>}>Videos</Route>

// </Routes>
// </Router>
<Router>
 <div> 
   <div>
   <AppBar position="static" >
   <Toolbar variant="dense">
     <IconButton className="homeBtn" edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }}  style={{ flex : 1}}>
     <Button style = {{background: '#3fb57c'}} variant="contained" color="primary" component={Link} to = {"/"} >
       Home
     </Button>
     <Button style = {{background: '#3fb57c'}} variant="contained" color="primary" component={Link} to = {"/Videos"}>
      Videos
     </Button>
     <Button style = {{background: '#3fb57c'}} variant="contained" color="primary" component={Link} to = {"/Skills"}>
       Albums
     </Button>
     </IconButton>       
   </Toolbar>
 </AppBar>
 </div>
 </div>
     <Routes>
     <Route path = "/"  exact element = { <Home/> }>Home</Route>
     <Route path = "/Skills" exact element = {<Skills/>}>Skills</Route>
     <Route path = "/Videos" exact element = {<Videos/>}>Videos</Route>

 </Routes>
 </Router>
        )
}