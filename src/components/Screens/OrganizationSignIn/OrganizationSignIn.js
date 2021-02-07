import {useState} from 'react';
import './OrganizationSignIn.css';
import TextField from "@material-ui/core/TextField";

const OraganizationSignIn = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const PostData = ()=>{
        if(!email){
            console.log("Please enter email");
        }else if(!password){
            console.log("Please enter password");
        }else{
            fetch("http://localhost:5000/organization/signin",
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
                    localStorage.setItem("organization",result.token)
                }
            })
        }
    }

    return(
        <div>
            <div className="org_login_card">
                <h1 className="org_signin_heading">SIGN IN</h1>
                <div className="org_signin_details">
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
                <div className="org_signin_button"
                onClick={()=>{PostData()}}>
                    SIGN IN
                </div>
                </div>
            </div>
        </div>
    )
}

export default OraganizationSignIn;