import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './PersonalPoll.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import Dialog from "@material-ui/core/Dialog";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const jwt = require('jsonwebtoken');

toast.configure();

const PersonalPoll = (props)=>{
    const [userId, setUserId] = useState("");
    const [pollData, setPollData] = useState({
        question: "Loading...",
        options: [
            {
                optionContent:"Loading...",
                optionIndex:"1"
            },
            {
                optionContent:"Loading...",
                optionIndex:"2"
            },
            {
                optionContent:"Loading...",
                optionIndex:"2"
            }
        ],
        createdBy:{
            name:"Loading..."
        },
        votes:[1,2,2,2,2,3,3,3,3]
    });
    const [vote, setVote] = useState(undefined);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [optionCount, setOptionCount] = useState([1,4,4]);
    const [voted, setVoted] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        try{
            const decodedToken = jwt.verify(localStorage.getItem("user"),process.env.REACT_APP_JWT_SECRET);
            setUserId(decodedToken._id);
            fetch(
                `https://poll-towards-a-goal.herokuapp.com/poll/personal/${props.location.pathname.substring(14)}`,
                {
                    method: "get",
                    headers:{
                        "Content-type": "application/json",
                    },
                }
            )
            .then(res=>res.json())
            .then(result=>{
                if(result.message==="Success"){
                    setPollData(result.poll);
                    var op = new Array(result.poll.options.length).fill(0);
                    try{
                    if(result.poll.votes!==[]){
                        result.poll.votes.forEach((data)=>{
                            op[data.option-1]++;
                        });
                    }
                    }catch{

                    }
                    setOptionCount(op);

                }
            })
        }catch{
            history.push("/signin")
        }
    },[voted]);

    const voteButtonHandler = ()=>{
        if(pollData.votes.find((data)=>{return data.votedBy===userId})){
            toast.error('Already voted to this poll!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            setDialogOpen(true);
        }
    }

    const PostData = ()=>{
        if(vote === undefined){
            toast.error('Please select an option!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            const index = pollData.options.findIndex((data)=>{return data.optionContent===vote})+1;
            fetch(
                `https://poll-towards-a-goal.herokuapp.com/poll/personal/vote/${props.location.pathname.substring(14)}`,
                {
                    method: "post",
                    headers:{
                        "Content-type": "application/json",
                    },
                    body:JSON.stringify({
                        userId: userId,
                        option: index
                    }),
                }
            )
            .then(res=>res.json())
            .then(result=>{
                if(result.poll){
                    toast.success('Successfully voted to this poll', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        setVoted(true);
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
            setDialogOpen(false);
        }
    }

    return(
        <div>
            <div className="poll_all_content">
                <h1 className="question">QUESTION</h1>
                <p className="question_text">{pollData.question}</p>
                <h1>OPTIONS</h1>
                {pollData.options.map((data,index)=>{
                    return(
                        <p className="option_text">{index+1} . {data.optionContent}</p>
                    )
                })}
                <HowToVoteIcon></HowToVoteIcon>
                <span className="vote_count">{pollData.votes.length} votes till now</span>
                <p className="vote_count"
                >Conducted By : {pollData.createdBy.name}</p>
                <h1>RESULTS</h1>
                
                    {pollData.options.map((data,index)=>{
                        return(
                            <Grid container>
                                <Grid item xs={12} sm={12} md={9} lg={9}>
                                    <div className="bar" style={{width:pollData.votes.length?optionCount[index]/pollData.votes.length*100+"%":"0.5%"}}>
                                    
                                    </div>
                                </Grid> 
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                {
                                    pollData.votes.length
                                    ?
                                    <p>{optionCount[index]} votes ({(optionCount[index]/pollData.votes.length*100).toFixed(2)+"%"}) {data.optionContent}</p>
                                    :
                                    <p>0 votes (0%) {data.optionContent}</p>
                                }
                                
                                </Grid>  
                            </Grid>
                        );
                    })} 
                <div className="vote"
                onClick={()=>{voteButtonHandler()}}>
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
                            <div className="vote"
                            onClick={()=>{PostData()}}>
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

export default PersonalPoll;