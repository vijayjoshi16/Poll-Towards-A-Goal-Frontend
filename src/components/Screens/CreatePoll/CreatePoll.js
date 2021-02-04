import {useState} from 'react';
import './CreatePoll.css';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";

const CreatePoll = ()=>{
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [newOption, setNewOption] = useState("");
    return(
        <div className="create_poll_card">
            <h1 className="create_poll_heading">CREATE A POLL</h1>
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
                            {index + ". " +data}
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
                        setOptions([...options, newOption]);
                        setNewOption("");
                    }}>
                        +
                    </div>
                </Grid>
            </Grid>
            <div className="submit_poll_button">
                    SUBMIT POLL
            </div>
        </div>
    )
}

export default CreatePoll;