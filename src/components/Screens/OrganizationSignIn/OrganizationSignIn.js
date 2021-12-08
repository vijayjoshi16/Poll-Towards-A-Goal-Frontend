import {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import './OrganizationSignIn.css';
import TextField from "@material-ui/core/TextField";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderAnimation from '../../LoaderAnimation';
const jwt = require('jsonwebtoken');

toast.configure();

const OraganizationSignIn = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        if(loader){
            fetch("https://poll-towards-a-goal.herokuapp.com/organization/signin",
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
                setLoader(false);
                if(result.message==="Logged in successfully!"){
                    toast.success('Logged in successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    localStorage.setItem("organization",result.token)
                    history.push('/');
                    window.location.reload();
                }else{
                    toast.error('Invalid credentials!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
            })
        }
        
    },[loader]);

    useEffect(()=>{
        try{
            const decodedToken = jwt.verify(localStorage.getItem("user"),process.env.REACT_APP_JWT_SECRET);
            history.push(`/allorganizationpolls`);
        }catch{
            
        }
    },[]);

    const PostData = ()=>{
        if(!email){
            toast.error('Please enter email!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else if(!password){
            toast.error('Please enter password!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            setLoader(true);
        }
    }

    return(
        <div>
            <div className="org_login_card">
                <h1 className="org_signin_heading">ORG SIGN IN</h1>
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
                <br></br>
                <button className="org_signin_button"
                onClick={()=>{PostData()}}>
                    SIGN IN
                </button>
                {
                    loader && <LoaderAnimation />
                }
                <p className="redirect_msg">New Organization? <Link to="/organizationsignup">Register here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default OraganizationSignIn;