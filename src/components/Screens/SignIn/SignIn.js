import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './SignIn.css';
import TextField from "@material-ui/core/TextField";
const jwt = require('jsonwebtoken');

const SignIn = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    useEffect(()=>{
        try{
            const decodedToken = jwt.verify(localStorage.getItem("organization"),process.env.REACT_APP_JWT_SECRET);
            history.push(`/organizationprofile/${decodedToken._id}`);
        }catch{
            
        }
    },[]);

    const PostData = ()=>{
        if(!email){
            console.log("Please enter email");
        }else if(!password){
            console.log("Please enter password");
        }else{
            fetch("http://localhost:5000/user/signin",
            {
                method: "post",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            })
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                if(result.message==="Logged in successfully!"){
                    localStorage.setItem("user",result.token);
                    history.push('/allorganizationpolls');
                    window.location.reload();
                }
            })
        }
    }

    return(
        <div>
            <div className="login_card">
                <h1 className="signin_heading">SIGN IN</h1>
                <div className="signin_details">
                <TextField
                    id="outlined-primary"
                    placeholder="Enter your email"
                    variant="outlined"
                    color="primary"
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <br></br>
                <TextField
                    style={{marginTop:"30px"}}
                    id="outlined-primary"
                    placeholder="Enter your password"
                    variant="outlined"
                    type="password"
                    color="primary"
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                <div className="signin_button"
                onClick={()=>{PostData()}}>
                    SIGN IN
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;