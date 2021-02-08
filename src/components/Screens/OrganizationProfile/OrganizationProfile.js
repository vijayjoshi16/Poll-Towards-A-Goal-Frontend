import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import "./OrganizationProfile.css";
import Grid from '@material-ui/core/Grid';
import PollData from '../../../PollData';
import EmailIcon from '@material-ui/icons/Email';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
const jwt = require('jsonwebtoken');

const OrganizationProfile = (props)=>{
    const [orgData, setOrgData] = useState({
        name:"Loading...",
        pic:"Loading...",
        polls:[],
        email:"Loading..."
    });
    const history = useHistory();

    useEffect(()=>{
        try{
            const decodedToken = jwt.verify(localStorage.getItem("user"),process.env.REACT_APP_JWT_SECRET)
            fetch(
                `http://localhost:5000/organization/${props.location.pathname.substring(21)}`,
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
                    setOrgData(result.organization)
                }
            })
        }catch{
            history.push("/signin")
        }
    },[]);
    
    console.log(orgData)
    return(
        <div className="org_profile_all_content">
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={3}>
                    <div className="org_details">
                    <div className="color_section"></div>
                    <img src={orgData.pic} className="organization_image"/>
                    <h2 className="org_name_profile">{orgData.name}</h2>
                    <EmailIcon className="email_icon_org_profile"></EmailIcon>
                    <span className="org_email">{orgData.email}</span>
                    <br></br>
                    <HowToVoteIcon className="email_icon_org_profile"></HowToVoteIcon>
                    <span className="org_email">{orgData.polls.length} polls conducted till now</span>
                    <br></br>
                    <div className="follow_button">
                        Follow
                    </div>
                    <div className="color_section_bottom"></div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={9}>
                    <div className="org_all_polls">
                        {orgData.polls.map((data)=>{
                            return(
                                <div className="org_poll_card">
                                    <div className="color_section"></div>
                                    <h2 className="option_content">{data.question}</h2>
                                    {data.options.map((option,index)=>{
                                        return(
                                            <h3 className="option_content">{index+1+"."} {option.optionContent}</h3>
                                        )
                                    })}
                                    <HowToVoteIcon className="option_content"></HowToVoteIcon>
                                    <span style={{verticalAlign:"top"}}>{data.votes.length} votes till now</span>
                                    <div className="color_section_bottom"></div>
                                </div>
                            )
                        })}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrganizationProfile