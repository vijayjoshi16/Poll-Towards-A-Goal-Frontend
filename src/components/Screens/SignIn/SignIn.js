import {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './SignIn.css';
import TextField from "@material-ui/core/TextField";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderAnimation from '../../LoaderAnimation';
const jwt = require('jsonwebtoken');

toast.configure();

const SignIn = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        try{
            const decodedToken = jwt.verify(localStorage.getItem("organization"),process.env.REACT_APP_JWT_SECRET);
            history.push(`/organizationprofile/${decodedToken._id}`);
        }catch{
            
        }
    },[]);

    useEffect(()=>{
        if(loader){
            fetch("https://poll-towards-a-goal.herokuapp.com/user/signin",
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
                    localStorage.setItem("user",result.token);
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
        setLoader(true)
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
                <br></br>
                <button className="signin_button"
                onClick={()=>{PostData()}}>
                    SIGN IN
                </button>
                {
                    loader && <LoaderAnimation />
                }
                <p className="redirect_msg">New User? <Link to="/signup">Register here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn;