import React from "react";
import { Button } from "@material-ui/core";
import { AppBar,Toolbar, IconButton, MenuIcon, Typography } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } 
from "react-router-dom";


export function Header() {
    return(
        <div>
        <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }}  style={{ flex : 1}}>
          <Button  variant="contained" color="primary" component="div">
            Home
          </Button>
     
          <Button variant="contained" color="primary" component="div">
           Videos
          </Button>
          <Button variant="contained" color="primary" component="div">
            SKills
          </Button>
          </IconButton>   
          </Toolbar>
 </AppBar>
 </div>
    )
}