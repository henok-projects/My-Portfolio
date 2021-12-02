import React from 'react';
import './profile.css'
import { Button, Typography } from '@material-ui/core';
import ProfileImage from '../../assets/images/profiles.JPG'
import CustomeTimeLine,{CustomeTimeLineSeparetor} from '../Timeline/TimeLine';
import resumeDate from '../../util/resumeDate';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import CustomButton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
  
const CustomeTimeLineItem = ({title,text,link}) =>(
 <TimelineItem>
     <CustomeTimeLineSeparetor/>
     <TimelineContent className ={'timeline_content'}>
     {link ? (
     <Typography className = {'timelineItem_text'}>
         <span>{title}:</span>
         <a href ={link} target ='_blank'>{text}</a>
     </Typography>):(
         <Typography className = {'timelineItem_text'}>
             <span>{title}:</span>{text}</Typography>
     )}
     </TimelineContent>
 </TimelineItem>
);

const profile = () => {
    return (
        <div className ="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeDate.name}</Typography>
                <Typography className="title">{resumeDate.title}</Typography>
            </div>
            <figure className ="profile_image">
                <img src= {ProfileImage} alt="logo"/>
            </figure>
            <div className ="profile_information">
                <CustomeTimeLine icon ={<PersonOutlineIcon/>} title ={""}>
                  <CustomeTimeLineItem title ='name' text ={resumeDate.name}/>
                  <CustomeTimeLineItem title ='title' text ={resumeDate.title}/>
                  <CustomeTimeLineItem title ='Email' text ={resumeDate.Email}/>
                  {Object.keys(resumeDate.socials).map((key) =>(
                      <CustomeTimeLineItem title ={key} text ={resumeDate.socials[key].text} link ={resumeDate.socials[key].link}/>
                  ))}
                </CustomeTimeLine>
               <div className ='button_container' style ={{display:"flex"}}>
               <CustomButton text={'Download CV'} icon ={<GetAppIcon/>}/>
               </div>
               
            </div>
        </div>
    )
}

export default profile
