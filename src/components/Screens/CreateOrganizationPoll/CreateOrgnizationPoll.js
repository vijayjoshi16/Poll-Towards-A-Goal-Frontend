import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './CreateOrganizationPoll.css';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const jwt = require('jsonwebtoken');

toast.configure();

const CreateOrganizationPoll = ()=>{
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [newOption, setNewOption] = useState("");
    const history = useHistory();
    const [id, setId] = useState("");

    useEffect(()=>{
        try{
            const decodedToken = jwt.verify(localStorage.getItem("organization"),process.env.REACT_APP_JWT_SECRET)
            setId(decodedToken._id);
        }catch{
            history.push("/organizationsignin")
        }
    },[]);

    const addOption = ()=>{
        if(options.find(option=>option.optionContent===newOption)){
            toast.error('Already added this option!', {
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
        setOptions([...options, {optionContent: newOption, optionIndex: options.length + 1}]);
        setNewOption("");
    }

    const PostData = ()=>{
        if(!question){
            toast.error('Please enter a question!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else if(options.length === 0){
            toast.error('Please enter atleast one option!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            fetch("https://poll-towards-a-goal.herokuapp.com/poll/createorganizationpoll",
            {
                method: "post",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    question: question,
                    options: options,
                    createdBy: id,
                }),
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.message === "Success!"){
                    toast.success('Created poll successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        history.push(`/organizationprofile/${result.poll.createdBy}`);
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
    }

    return(
        <div className="create_poll_card">
            <h1 className="create_poll_heading">CREATE AN ORGANIZATION POLL</h1>
            <Grid container className="poll_container">
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <h3 className="question_heading">QUESTION : </h3>
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8}>
                    <TextField
                        id="outlined-primary"
                        placeholder="Enter a question"
                        variant="outlined"
                        color="primary"
                        fullWidth={true}
                        onChange={(e)=>{setQuestion(e.target.value)}}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <h3 className="question_heading">OPTIONS</h3>
                </Grid>
                {options.map((data,index)=>{
                    index++;
                    return(
                        <Grid style={{marginTop:"15px",fontSize:"1.5rem"}} item xs={12} sm={12} md={12} lg={12}>
                            {index + ". " +data.optionContent}
                        </Grid>
                    )
                })}
                <Grid style={{marginTop:"20px"}} item xs={12} sm={6} md={8} lg={8}>
                    <TextField
                        id="outlined-primary"
                        placeholder="Enter an option"
                        variant="outlined"
                        color="primary"
                        fullWidth={true}
                        onChange={(e)=>{setNewOption(e.target.value)}}
                        value={newOption}
                    />
                </Grid>
                <Grid style={{marginTop:"20px"}} item xs={12} sm={6} md={4} lg={4}>
                    <div className="add_option_button"
                    onClick={()=>{
                        addOption();
                    }}>
                        +
                    </div>
                </Grid>
            </Grid>
            <div className="submit_poll_button"
            onClick={()=>{PostData()}}>
                    SUBMIT POLL
            </div>
        </div>
    )
}

export default CreateOrganizationPoll;