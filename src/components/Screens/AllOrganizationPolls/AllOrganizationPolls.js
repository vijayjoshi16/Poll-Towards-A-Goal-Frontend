import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import "./AllOrganizationPolls.css";
import Grid from '@material-ui/core/Grid';
import org_img from '../../../img/org_img.jpg';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
const jwt = require('jsonwebtoken');

const AllOrganizationPolls = ()=>{
    const [PollData, setPollData] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        try{
            const decodedToken = jwt.verify(localStorage.getItem("user"),process.env.REACT_APP_JWT_SECRET)
            fetch("http://localhost:5000/poll/organization/getallpolls",
            {
                method:"get",
                headers:{
                    "Content-Type":"application/json",
                },
            })
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
                setPollData(result.polls)
            })
        }catch{
            history.push("/signin")
        }
    },[]);

    return(
        <div className="all_content_all_org_polls">
            <h1>ALL ORGANIZATION POLLS</h1>
            <Grid container>
                {PollData.map((data)=>{
                    return(
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <div className="poll_card">
                                <div className="poll_card_content">
                                <div className="color_section"></div>
                                <img className="org_image" src={data.createdBy.pic} />
                                <h2 className="org_name_poll">{data.createdBy.name}</h2>
                                <p className="org_poll_question">{data.question}</p>
                                <HowToVoteIcon
                                className="how_to_vote_icon"></HowToVoteIcon>
                                <span className="vote_count">{data.votes.length? data.votes.length : 0} votes</span>
                                <div className="color_section_bottom"></div>
                                </div>
                            </div>
                        </Grid> 
                    )
                })}
            </Grid>
        </div>
    )
}

export default AllOrganizationPolls;