import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './OrganizationPoll.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import Dialog from "@material-ui/core/Dialog";
const jwt = require('jsonwebtoken');

const OrganizationPoll = (props)=>{
    const [userId, setUserId] = useState("");
    const [pollData, setPollData] = useState({
        question: "Loading...",
        options: [
            {
                optionContent:"Loading..."
            },
            {
                optionContent:"Loading..."
            },
            {
                optionContent:"Loading..."
            }
        ],
        votes:[]
    });
    const [vote, setVote] = useState(undefined);
    const [dialogOpen, setDialogOpen] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        try{
            const decodedToken = jwt.verify(localStorage.getItem("user"),process.env.REACT_APP_JWT_SECRET);
            setUserId.apply(decodedToken._id);
            fetch(
                `http://localhost:5000/poll/organization/${props.location.pathname.substring(18)}`,
                {
                    method: "get",
                    headers:{
                        "Content-type": "application/json",
                    },
                }
            )
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
                if(result.message==="Success"){
                    setPollData(result.poll);
                }
            })
        }catch{
            history.push("/signin")
        }
    },[]);

    return(
        <div>
            <div className="poll_all_content">
                <h1 className="question">QUESTION</h1>
                <h2>{pollData.question}</h2>
                <h1>OPTIONS</h1>
                {pollData.options.map((data,index)=>{
                    return(
                        <p>{index+1} . {data.optionContent}</p>
                    )
                })}
                <HowToVoteIcon></HowToVoteIcon>
                <span className="vote_count">{pollData.votes.length} votes till now</span>
                <p className="vote_count">Conducted By : Cool Organization</p>
                <h1>RESULTS</h1>
                <Grid container>
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <div className="bar" style={{width:"55%"}}>
                        
                        </div>
                    </Grid> 
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                       12 votes (55%) React JS
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <div className="bar" style={{width:"25%"}}>
                        
                        </div>
                    </Grid> 
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                       12 votes (25%) Angular JS
                    </Grid> 
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <div className="bar" style={{width:"10%"}}>
                        
                        </div>
                    </Grid> 
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                       12 votes (10%) Vue JS
                    </Grid>  
                </Grid>
                <div className="vote"
                onClick={()=>{setDialogOpen(true)}}>
                    <SendIcon></SendIcon>
                    <span className="vote_count">VOTE</span>
                </div>
                
                <Dialog
                open={dialogOpen}
                onBackdropClick={()=>{setDialogOpen(false)}}>
                    <div className="dialog">
                        <FormControl style={{width:"100%"}} component="fieldset">
                        <h2 className="options_dialog">OPTIONS</h2>
                        <RadioGroup aria-label="Options" name="options" value={vote} onChange={(e)=>{setVote(e.target.value)}}>
                            {pollData.options.map((data)=>{
                                return(
                                    <FormControlLabel value={data.optionContent} control={<Radio color="primary" />} label={data.optionContent} />
                                );
                            })}
                            <div className="vote">
                                <SendIcon></SendIcon>
                                <span className="vote_count">VOTE</span>
                            </div>
                        </RadioGroup>
                        </FormControl>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default OrganizationPoll;