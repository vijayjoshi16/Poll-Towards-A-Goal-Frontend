import {useState} from 'react';
import './OrganizationSignIn.css';
import TextField from "@material-ui/core/TextField";

const OraganizationSignIn = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div>
            <div className="org_login_card">
                <h1 className="org_signin_heading">SIGN IN</h1>
                <div className="org_signin_details">
                <p>Enter your email id</p>
                <TextField
                    id="outlined-primary"
                    placeholder="Enter your email"
                    variant="outlined"
                    color="primary"
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <p>Enter your password</p>
                <TextField
                    id="outlined-primary"
                    placeholder="Enter your password"
                    variant="outlined"
                    type="password"
                    color="primary"
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                <div className="org_signin_button">
                    SIGN IN
                </div>
                </div>
            </div>
        </div>
    )
}

export default OraganizationSignIn;