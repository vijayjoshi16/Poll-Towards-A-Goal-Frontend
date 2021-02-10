import React,{useState,useEffect} from 'react';
import {useMediaQuery } from 'react-responsive';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {useHistory} from 'react-router-dom';
const jwt = require('jsonwebtoken');

export default function Navbar(){
  const isMobile = useMediaQuery({
    maxWidth:"960px"
  });
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [org, setOrg] = useState(false);

  useEffect(()=>{
    try{
      const decodedToken = jwt.verify(localStorage.getItem("user"),process.env.REACT_APP_JWT_SECRET);
      setUser(true);
    }catch{
      setUser(false);
      try{
        const decodedToken = jwt.verify(localStorage.getItem("organization"),process.env.REACT_APP_JWT_SECRET);
        setOrg(true);
      }catch{
        setOrg(false);
      }
    }
  },[localStorage.getItem("user")]);

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
          {
            user
            ?
            <div
              style={{display:"inline",float:"right",marginTop:"5px",marginRight:"5px"}}>
                <h2
                style={{
              display:"inline",
              fontSize:"1.5rem",
              marginLeft:"10px",
              color:"#3f51b5",
              verticalAlign:"top",
              fontWeight:200,
              cursor:"pointer"}}
              onClick={()=>{history.push('/allpersonalpolls')}}
              >Personal Polls</h2>
                <h2
                style={{
              display:"inline",
              fontSize:"1.5rem",
              marginLeft:"10px",
              color:"#3f51b5",
              verticalAlign:"top",
              fontWeight:200,
              cursor:"pointer"}}
              onClick={()=>{history.push('/allorganizationpolls')}}
              >Organization Polls</h2>
              <h2
                style={{
              display:"inline",
              fontSize:"1.5rem",
              marginLeft:"10px",
              color:"#3f51b5",
              verticalAlign:"top",
              fontWeight:200,
              cursor:"pointer"}}
              onClick={()=>{history.push('/createpersonalpoll')}}
              >Create Poll</h2>
                <h2
                style={{
              display:"inline",
              fontSize:"1.5rem",
              marginLeft:"10px",
              color:"white",
              verticalAlign:"top",
              fontWeight:200,
              backgroundColor:"#5e6cb8",
              padding:"5px",
              borderRadius:"5px",
              cursor:"pointer"}}
              onClick={()=>{
                localStorage.removeItem("user");
                history.push('/signin');
                window.location.reload();
              }}
              >Logout</h2>
              </div>
            :
            org
            ?
            <div
              style={{display:"inline",float:"right",marginTop:"5px",marginRight:"5px"}}>
                <h2
                style={{
              display:"inline",
              fontSize:"1.5rem",
              marginLeft:"10px",
              color:"#3f51b5",
              verticalAlign:"top",
              fontWeight:200,
              cursor:"pointer"}}
              onClick={()=>{
                history.push(`/organizationprofile/${jwt.verify(localStorage.getItem("organization"),process.env.REACT_APP_JWT_SECRET)._id}`)
              }}
              >Profile</h2>
              <h2
                style={{
              display:"inline",
              fontSize:"1.5rem",
              marginLeft:"10px",
              color:"#3f51b5",
              verticalAlign:"top",
              fontWeight:200,
              cursor:"pointer"}}
              onClick={()=>{history.push('/createorganizationpoll')}}
              >Create Poll</h2>
                <h2
                style={{
              display:"inline",
              fontSize:"1.5rem",
              marginLeft:"10px",
              color:"white",
              verticalAlign:"top",
              fontWeight:200,
              backgroundColor:"#5e6cb8",
              padding:"5px",
              borderRadius:"5px",
              cursor:"pointer"}}
              onClick={()=>{
                localStorage.removeItem("organization");
                history.push('/organizationsignin');
                window.location.reload();
              }}
              >Logout</h2>
              </div>
            :
            <div
              style={{display:"inline",float:"right",marginTop:"5px",marginRight:"5px"}}>
                <h2
                style={{
              display:"inline",
              fontSize:"1.5rem",
              marginLeft:"10px",
              color:"#3f51b5",
              verticalAlign:"top",
              fontWeight:200,
              cursor:"pointer"}}
              onClick={()=>{history.push("/signin")}}
              >SignIn</h2>
                <h2
                style={{
              display:"inline",
              fontSize:"1.5rem",
              marginLeft:"10px",
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
              marginLeft:"10px",
              color:"white",
              verticalAlign:"top",
              fontWeight:200,
              backgroundColor:"#5e6cb8",
              padding:"5px",
              borderRadius:"5px",
              cursor:"pointer"}}
              onClick={()=>{history.push("/organizationsignin")}}
              >Org SignIn</h2>
              <h2
              style={{
              display:"inline",
              fontSize:"1.5rem",
              marginLeft:"10px",
              color:"white",
              verticalAlign:"top",
              fontWeight:200,
              backgroundColor:"#5e6cb8",
              padding:"5px",
              borderRadius:"5px",
              cursor:"pointer"}}
              onClick={()=>{history.push("/organizationsignup")}}
              >Org Register</h2>
              </div>
          }
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
            {
            user
            ?
            <div
              style={{display:"inline",float:"right",marginTop:"5px",marginRight:"60px"}}>
                <h2
                style={{
              fontSize:"1.5rem",
              marginLeft:"20px",
              color:"#3f51b5",
              verticalAlign:"top",
              fontWeight:200,
              cursor:"pointer"}}
              onClick={()=>{history.push('/allpersonalpolls')}}
              >Personal Polls</h2>
                <h2
                style={{
              fontSize:"1.5rem",
              marginLeft:"20px",
              color:"#3f51b5",
              verticalAlign:"top",
              fontWeight:200,
              cursor:"pointer"}}
              onClick={()=>{history.push('/allorganizationpolls')}}
              >Organization Polls</h2>
              <h2
                style={{
              fontSize:"1.5rem",
              marginLeft:"20px",
              color:"#3f51b5",
              verticalAlign:"top",
              fontWeight:200,
              cursor:"pointer"}}
              onClick={()=>{history.push('/createpersonalpoll')}}
              >Create Poll</h2>
                <h2
                style={{
              fontSize:"1.5rem",
              marginLeft:"20px",
              color:"white",
              verticalAlign:"top",
              fontWeight:200,
              backgroundColor:"#5e6cb8",
              padding:"5px",
              borderRadius:"5px",
              cursor:"pointer"}}
              onClick={()=>{
                localStorage.removeItem("user");
                history.push('/signin');
              }}
              >Logout</h2>
              </div>
            :
            org
            ?
            <div
              style={{display:"inline",float:"right",marginTop:"5px",marginRight:"60px"}}>
                <h2
                style={{
              fontSize:"1.5rem",
              marginLeft:"20px",
              color:"#3f51b5",
              verticalAlign:"top",
              fontWeight:200,
              cursor:"pointer"}}
              onClick={()=>{
                history.push(`/organizationprofile/${jwt.verify(localStorage.getItem("organization"),process.env.REACT_APP_JWT_SECRET)._id}`)
              }}
              >Profile</h2>
              <h2
                style={{
              fontSize:"1.5rem",
              marginLeft:"20px",
              color:"#3f51b5",
              verticalAlign:"top",
              fontWeight:200,
              cursor:"pointer"}}
              onClick={()=>{history.push('/createorganizationpoll')}}
              >Create Poll</h2>
                <h2
                style={{
              fontSize:"1.5rem",
              marginLeft:"20px",
              color:"white",
              verticalAlign:"top",
              fontWeight:200,
              backgroundColor:"#5e6cb8",
              padding:"5px",
              borderRadius:"5px",
              cursor:"pointer"}}
              onClick={()=>{
                localStorage.removeItem("organization");
                history.push('/organizationsignin');
              }}
              >Logout</h2>
              </div>
            :
            <div
              style={{display:"inline",float:"right",marginTop:"5px",marginRight:"60px"}}>
                <h2
                style={{
              fontSize:"1.5rem",
              marginLeft:"20px",
              color:"#3f51b5",
              verticalAlign:"top",
              fontWeight:200,
              cursor:"pointer"}}
              onClick={()=>{history.push("/signin")}}
              >SignIn</h2>
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
              color:"white",
              verticalAlign:"top",
              fontWeight:200,
              backgroundColor:"#5e6cb8",
              padding:"5px",
              borderRadius:"5px",
              cursor:"pointer"}}
              onClick={()=>{history.push("/organizationsignin")}}
              >Org SignIn</h2>
              <h2
              style={{
              fontSize:"1.5rem",
              marginLeft:"20px",
              color:"white",
              verticalAlign:"top",
              fontWeight:200,
              backgroundColor:"#5e6cb8",
              padding:"5px",
              borderRadius:"5px",
              cursor:"pointer"}}
              onClick={()=>{history.push("/organizationsignup")}}
              >Org Register</h2>
              </div>
          }
            </SwipeableDrawer>
        </div>
      }
    </div>
  )
}