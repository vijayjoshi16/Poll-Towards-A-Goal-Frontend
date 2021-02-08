import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './CreateOrganizationPoll.css';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
const jwt = require('jsonwebtoken');

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

    const PostData = ()=>{
        if(!question){
            console.log("Please enter question");
        }else if(options.length === 0){
            console.log("Please enter an option");
        }else{
            fetch("http://localhost:5000/poll/createorganizationpoll",
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
                console.log(result)
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
                        setOptions([...options, {optionContent: newOption, optionIndex: options.length + 1}]);
                        setNewOption("");
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