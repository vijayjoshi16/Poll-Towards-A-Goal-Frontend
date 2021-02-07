import React,{useState} from 'react';
import {useMediaQuery } from 'react-responsive';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {useHistory} from 'react-router-dom';

export default function Navbar(){
  const isMobile = useMediaQuery({
    maxWidth:"767px"
  });
  const history = useHistory();
  const [open, setOpen] = useState(false);
  return(
    <div>
      {
        !isMobile
        ?
        <div
        style={{
          backgroundColor:"white",
          paddingTop:"5px",
          boxShadow:"5px 5px 15px #afacac",
          position:"fixed",
          width:"100%",
          top:"0"
        }}>
          <PollOutlinedIcon 
          color="primary"
          fontSize="large"
          style={{
            width:"40px",
            height:"40px",
            marginTop:"5px",
            marginLeft:"50px",
            cursor:"pointer"
          }}></PollOutlinedIcon>
          <h1 
          style={{
            display:"inline",
            fontSize:"2rem",
            marginLeft:"20px",
            color:"#3f51b5",
            verticalAlign:"top"}}>
            POLLING APP
            </h1>
            <div
            style={{display:"inline",float:"right",marginTop:"5px",marginRight:"60px"}}>
              <h2
              style={{
            display:"inline",
            fontSize:"1.5rem",
            marginLeft:"20px",
            color:"#3f51b5",
            verticalAlign:"top",
            fontWeight:200,
            cursor:"pointer"}}
            onClick={()=>{history.push("/signin")}}
            >Sign In</h2>
              <h2
              style={{
            display:"inline",
            fontSize:"1.5rem",
            marginLeft:"20px",
            color:"#3f51b5",
            verticalAlign:"top",
            fontWeight:200,
            cursor:"pointer"}}
            onClick={()=>{history.push("/signup")}}
            >Register</h2>
              <h2
              style={{
            display:"inline",
            fontSize:"1.5rem",
            marginLeft:"20px",
            color:"white",
            verticalAlign:"top",
            fontWeight:200,
            backgroundColor:"#5e6cb8",
            padding:"5px",
            borderRadius:"5px",
            cursor:"pointer"}}
            >Organization</h2>
            </div>
        </div>
        :
        <div
        style={{
          backgroundColor:"white",
          paddingTop:"5px",
          boxShadow:"5px 5px 15px #afacac",
          position:"fixed",
          width:"100%",
          top:"0"
        }}>
        <PollOutlinedIcon 
          color="primary"
          fontSize="large"
          style={{
            width:"40px",
            height:"40px",
            marginTop:"5px",
            marginLeft:"30px",
            cursor:"pointer"
          }}></PollOutlinedIcon>
          <h1 
          style={{
            display:"inline",
            fontSize:"2rem",
            marginLeft:"20px",
            color:"#3f51b5",
            verticalAlign:"top"}}>
            POLLING APP
            </h1>
            <div
            style={{
              position:"fixed",
              bottom:"25px",
              left:"15px",
              backgroundColor:"#3f51b5",
              borderRadius:"50%",
              height:"50px",
              width:"50px",
              color:"white"
            }}
            onClick={()=>{setOpen(true)}}>
              <MenuIcon
              style={{
                width:"30px",
                height:"30px",
                marginLeft:"10px",
                marginTop:"10px"
              }}></MenuIcon>
            </div>
            <SwipeableDrawer
            open={open}
            onOpen={()=>{setOpen(true)}}
            onClose={()=>{setOpen(false)}}>
            <h2
              style={{
            fontSize:"1.5rem",
            marginLeft:"20px",
            color:"#3f51b5",
            verticalAlign:"top",
            fontWeight:200,
            cursor:"pointer"}}
            onClick={()=>{history.push("/signin")}}
            >Sign In</h2>
              <h2
              style={{
            fontSize:"1.5rem",
            marginLeft:"20px",
            color:"#3f51b5",
            verticalAlign:"top",
            fontWeight:200,
            cursor:"pointer"}}
            onClick={()=>{history.push("/signup")}}
            >Register</h2>
              <h2
              style={{
                fontSize:"1.5rem",
            marginLeft:"20px",
            color:"#3f51b5",
            verticalAlign:"top",
            fontWeight:200,
            cursor:"pointer",
            marginRight:"20px"}}
            >Organization</h2>
            </SwipeableDrawer>
        </div>
      }
    </div>
  )
}