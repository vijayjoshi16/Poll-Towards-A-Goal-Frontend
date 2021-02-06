import "./OrganizationProfile.css";
import Grid from '@material-ui/core/Grid';
import PollData from '../../../PollData';
import org_img from '../../../img/org_img.jpg';
import EmailIcon from '@material-ui/icons/Email';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const OrganizationProfile = ()=>{
    return(
        <div className="org_profile_all_content">
            <Grid container>
                <Grid className="org_details" item xs={12} sm={12} md={4} lg={3}>
                    <div className="color_section"></div>
                    <img src={org_img} className="organization_image"/>
                    <h2 className="org_name_profile">Organization Name</h2>
                    <EmailIcon className="email_icon_org_profile"></EmailIcon>
                    <span className="org_email">orgemail@email.com</span>
                    <br></br>
                    <HowToVoteIcon className="email_icon_org_profile"></HowToVoteIcon>
                    <span className="org_email">12 polls conducted till now</span>
                    <br></br>
                    <WhatshotIcon className="email_icon_org_profile"></WhatshotIcon>
                    <span className="org_email">18 followers</span>
                    <div className="follow_button">
                        Follow
                    </div>
                    <div className="color_section_bottom"></div>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={9}>
                    <div className="org_all_polls">
                        <h1>POLLS CONDUCTED</h1>
                        {PollData.map((data)=>{
                            return(
                                <div className="org_poll_card">
                                    <div className="color_section"></div>
                                    <h2>{data.question}</h2>
                                    {data.options.map((option,index)=>{
                                        return(
                                            <h3>{index+1+"."} {option.optionContent}</h3>
                                        )
                                    })}
                                    <HowToVoteIcon></HowToVoteIcon>
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