import "./SubscribedOrganizationPolls.css";
import Grid from '@material-ui/core/Grid';
import PollData from '../../../PollData';
import org_img from '../../../img/org_img.jpg';
import HowToVoteIcon from '@material-ui/icons/HowToVote';

const SubscribedOrganizationPolls = ()=>{
    console.log(PollData)
    return(
        <div className="all_content_sub_org_polls">
            <h1>SUBSCRIBED ORGANIZATION POLLS</h1>
            <Grid container>
                {PollData.map((data)=>{
                    return(
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <div className="poll_card">
                                <div className="poll_card_content">
                                <div className="color_section"></div>
                                <img className="org_image" src={org_img} />
                                <h2 className="org_name_poll">Organization name</h2>
                                <p className="org_poll_question">{data.question}</p>
                                <HowToVoteIcon
                                className="how_to_vote_icon"></HowToVoteIcon>
                                <span className="vote_count">{data.votes.length} votes</span>
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

export default SubscribedOrganizationPolls;