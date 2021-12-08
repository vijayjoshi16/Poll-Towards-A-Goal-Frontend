import './HomeScreen.css';
import Grid from '@material-ui/core/Grid';
import intro from '../../../img/intro.webp';
import final_img from '../../../img/final_img.webp';
import ForumIcon from '@material-ui/icons/Forum';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import BusinessIcon from '@material-ui/icons/Business';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LanguageIcon from '@material-ui/icons/Language';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PollIcon from '@material-ui/icons/Poll';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import WebIcon from '@material-ui/icons/Web';

const HomeScreen = ()=>{
    return(
        <div>
            <Grid container className="landing_page">
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <h1 className="main_heading">POLL TOWARDS A GOAL</h1>
                    <p className="short_description">A web app where you can conduct your own personal or organization polls and this serves as the ultimate solution for all your needs. This web app provides the necessary features for both poll creators and voters in order to carry out their polling tasks.</p>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img className="intro_img" src={intro} alt="Representative Image"></img>
                </Grid>
                <Grid className="why_polls" item xs={12} sm={12} md={12} lg={12}>
                    <h1 className="why_polls_heading">WHY DO WE NEED POLLS??</h1>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="why_polls_card" >
                            <ForumIcon style={{height:"100px",width:"100px",marginTop:"5px"}}></ForumIcon>
                            <p>Polls form a way to communicate with your audience or customers. For eg. a restaurant and its customers, a website and its users, a team of developers and a set of users, a tourist place and its visitors, a company selling a product and its customers</p>
                            </div>
                        </Grid> 
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="why_polls_card" >
                            <InsertEmoticonIcon style={{height:"100px",width:"100px",marginTop:"5px"}}></InsertEmoticonIcon>
                            <p>With polls you can assess the satisfaction level of your audience, customers, subscribers. This would help you to judje how good has you organization or business has performed based on the positive feedback and constructive criticism.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="why_polls_card" >
                            <BusinessIcon style={{height:"100px",width:"100px",marginTop:"5px"}}></BusinessIcon>
                            <p>When you know the needs of your customers, you can accordingly bring changes and innovations to your organization which will bring an improvement in its products and services given the fact that you'll be now clear with what exactly to do.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="why_polls_card" >
                            <TrendingUpIcon style={{height:"100px",width:"100px",marginTop:"5px"}}></TrendingUpIcon>
                            <p>Such a feedback system can help organizations and business grow in terms of profit, reputation among customers, and understanding the need of modern day requirements.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="why_polls_card" >
                            <LanguageIcon style={{height:"100px",width:"100px",marginTop:"5px"}}></LanguageIcon>
                            <p>Polls on an online platform can connect you to a huge number of people which gives you a large set of audience to take a feedback upon and makes your poll results cover all possibilities.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="why_polls_card" >
                            <TimelapseIcon style={{height:"100px",width:"100px",marginTop:"5px"}}></TimelapseIcon>
                            <p>Online poll platform gives you the comfort of instant results since there is no procedure of manual counting. Hence you can get your results within a short span of time</p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="features" item  xs={12} sm={12} md={12} lg={12}>
                    <h1 className="features_heading">FEATURES</h1>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="why_polls_card" >
                            <WebIcon style={{height:"100px",width:"100px",marginTop:"5px"}}></WebIcon>
                            <p>Landing page to give a basic introduction to the web app</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="why_polls_card" >
                            <LockOpenIcon style={{height:"100px",width:"100px",marginTop:"5px"}}></LockOpenIcon>
                            <p>Sign In and Register for both Users and Organizations</p>
                            </div>
                        </Grid> 
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="why_polls_card" >
                            <DashboardIcon style={{height:"100px",width:"100px",marginTop:"5px"}}></DashboardIcon>
                            <p>Dashboard/Profile for organizations</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="why_polls_card" >
                            <PollIcon style={{height:"100px",width:"100px",marginTop:"5px"}}></PollIcon>
                            <p>Create Personal Polls and Organization Polls</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="why_polls_card" >
                            <FormatListBulletedIcon style={{height:"100px",width:"100px",marginTop:"5px"}}></FormatListBulletedIcon>
                            <p>Page for polls to see the poll details and current results</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="why_polls_card" >
                            <HowToVoteIcon style={{height:"100px",width:"100px",marginTop:"5px"}}></HowToVoteIcon>
                            <p>Vote to Personal and Organization Polls</p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <h2 className="final_message">SO WHAT ARE YOU WAITING FOR??? GET STARTED WITH THIS WONDERFUL POLLING APP!!</h2>
                <img className="final_img" src={final_img} alt="Product Image"></img>
            </Grid>
        </div>
    )
}

export default HomeScreen;