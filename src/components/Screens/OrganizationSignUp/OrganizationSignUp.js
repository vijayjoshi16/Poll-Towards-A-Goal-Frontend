import {useState, useEffect} from 'react';
import './OrganizationSignUp.css';
import TextField from "@material-ui/core/TextField";

const OraganizationSignUp = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image,setImage] = useState("");
    const [url, setUrl] = useState(undefined);
    
    useEffect(()=>{
        if(!name || !password || !url || !email){
            console.log("Please enter all the credentials to sign up.")
        }else{
            fetch("http://localhost:5000/organization/signup",
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
                console.log(result);
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
            console.log(data.url)
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const PostData = ()=>{
        if(!name){
            console.log("Please enter name");
            return;
        }
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            console.log("Invalid email");
            return;
        }
        if(password.length<8){
            console.log("Password length should be atleast 8");
            return;
        }
        UploadImage();
    }

    return(
        <div>
            <div className="org_singup_card">
                <h1 className="org_signup_heading">SIGN UP</h1>
                <div className="org_signup_details">
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
                <div className="org_signup_button"
                onClick={()=>PostData()}>
                    SIGN UP
                </div>
                </div>
            </div>
        </div>
    )
}

export default OraganizationSignUp;