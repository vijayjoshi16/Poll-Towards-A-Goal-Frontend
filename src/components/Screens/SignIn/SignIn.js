import {useState} from 'react';
import './SignIn.css';
import TextField from "@material-ui/core/TextField";

const SignIn = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                <div className="signin_button">
                    SIGN IN
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;