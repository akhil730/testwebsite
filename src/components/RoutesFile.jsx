import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } 
  from "react-router-dom";
  import { Skills } from "./Skills";
  import Home from "./Home";
  import { Videos } from "./Videos";
  import { AppBar,Toolbar, IconButton, MenuIcon, Typography } from "@material-ui/core";
  import { Header } from "./Header";

  export function RoutesFile() {
      return(
<div>    
    
        <Header/>
        <Router>
<Routes>
    <Route path = "/"  exact element = { <Home/> }>Home</Route>
    <Route path = "/Skills" exact element = {<Skills/>}>Skills</Route>
    <Route path = "/Videos" exact element = {<Videos/>}>Videos</Route>

</Routes>
</Router>
</div>


      )
  }