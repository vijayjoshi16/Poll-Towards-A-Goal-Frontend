import {useState} from 'react';
import './OrganizationSignUp.css';
import TextField from "@material-ui/core/TextField";

const OraganizationSignUp = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image,setImage] = useState("");
    return(
        <div>
            <div className="org_singup_card">
                <h1 className="org_signup_heading">SIGN UP</h1>
                <div className="org_signup_details">
                <p>Enter your name</p>
                <TextField
                    id="outlined-primary"
                    placeholder="Enter your name"
                    variant="outlined"
                    color="primary"
                    onChange={(e)=>{setName(e.target.value)}}
                />
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
                <p>Upload your picture</p>
                <input style={{marginLeft:"35px"}} type="file" onChange={(e)=>{
                    setImage(e.target.files[0]);
                }} />
                <div className="org_signup_button">
                    SIGN IN
                </div>
                </div>
            </div>
        </div>
    )
}

export default OraganizationSignUp;