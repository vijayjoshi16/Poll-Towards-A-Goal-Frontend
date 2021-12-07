import {useState, useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import './SignUp.css';
import TextField from "@material-ui/core/TextField";
import {toast} from 'react-toastify';
import LoaderAnimation from '../../LoaderAnimation';
import 'react-toastify/dist/ReactToastify.css';
const jwt = require('jsonwebtoken');

toast.configure();

const SignUp = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image,setImage] = useState("");
    const [url, setUrl] = useState(undefined);
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
        if(!name || !password || !url || !email){
            toast('Please enter all credentials to sign up!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            fetch("https://poll-towards-a-goal.herokuapp.com/user/signup",
            {
                method:"post",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    pic: url
                }),
            })
            .then(res=>res.json())
            .then(result=>{
                setLoader(false);
                if(result.message==="Saved user successfully!"){
                    toast.success('Saved user successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        history.push('/');
                }else{
                    toast.error('Some error occured!', {
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
    },[url]);

    const UploadImage = ()=>{
        const data = new FormData();
        data.append("file",image);
        data.append("upload_preset","polling-app");
        data.append("cloud_name","vijayscloud");
        fetch("https://api.cloudinary.com/v1_1/vijayscloud/image/upload",
        {method:"post",
        body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
            if(data.url===undefined){
                toast.error('Some error occured!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                setLoader(false);
            }
        })
        .catch(err=>{
        })
    }

    const PostData = ()=>{
        if(!name){
            toast.error('Please enter name!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return;
        }
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            toast.error('Invalid email!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return;
        }
        if(password.length<8){
            toast.error('Password length should be atleast 8!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return;
        }
        setLoader(true);
        UploadImage();
    }

    return(
        <div>
            <div className="singup_card">
                <h1 className="signup_heading">SIGN UP</h1>
                <div className="signup_details">
                <TextField
                    id="outlined-primary"
                    placeholder="Enter your name"
                    variant="outlined"
                    color="primary"
                    onChange={(e)=>{setName(e.target.value)}}
                />
                <br></br>
                <TextField
                style={{marginTop:"30px"}}
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
                <input style={{marginLeft:"35px",marginTop:"30px"}} type="file" onChange={(e)=>{
                    setImage(e.target.files[0]);
                }} />
                <br></br>
                <button className="signup_button"
                onClick={()=>PostData()}>
                    SIGN UP
                </button>
                {
                    loader && <LoaderAnimation />
                }
                <p className="redirect_msg">Already registered? <Link to="/signin">SignIn here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;