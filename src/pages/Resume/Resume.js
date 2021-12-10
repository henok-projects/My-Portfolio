import { Grid, Typography, Icon, TextField } from "@material-ui/core";
import React from "react";
import resumeDate from "../../util/resumeDate";
import CustomeTimeLine, {
  CustomeTimeLineSeparetor,
} from "../../components/Timeline/TimeLine";
import WorkIcon from "@material-ui/icons/Work";
import "./Resume.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineDot from "@material-ui/lab/TimelineDot";
// import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import SchoolIcon from "@material-ui/icons/School";
import Paper from "@material-ui/core/Paper";
// import Timeline from "@material-ui/lab/Timeline";
import CustomButton from "../../components/Button/Button";

const Resume = () => {
  return (
    <>
      {/* About me*/}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>

        <Grid item className="aboutme_text" xs={12}>
          <Typography>{resumeDate.About}</Typography>
        </Grid>
      </Grid>

      {/* education and experiance*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* experiance*/}
            <Grid item sm={12} md={6}>
              <CustomeTimeLine title="Work Experiance" icon={<WorkIcon />}>
                {resumeDate.experiances.map((experiance) => (
                  <TimelineItem>
                    <CustomeTimeLineSeparetor className="separeter_padding">
                      {/* <TimelineDot variant='outlined' className ='timeline_dot' />
                                           <TimelineConnector/> */}
                    </CustomeTimeLineSeparetor>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experiance.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experiance.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experiance.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomeTimeLine>
            </Grid>
            {/* education */}
            <Grid item sm={12} md={6}>
              <CustomeTimeLine title="Education" icon={<SchoolIcon />}>
                {resumeDate.educations.map((education) => (
                  <TimelineItem>
                    <CustomeTimeLineSeparetor className="separeter_padding">
                      {/* <TimelineDot variant='outlined' className ='timeline_dot' />
                                           <TimelineConnector/> */}
                    </CustomeTimeLineSeparetor>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomeTimeLine>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeDate.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Skills*/}
      <Grid container className="section graybg pb_45 p_50">
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {resumeDate.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      {/* <TimelineDot>{element}</TimelineDot>  */}
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Contacts*/}
      <Grid container spacing={7} className="section pt_45 pb_45">
        {/*contact form*/}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>
            {/*inputs*/}
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="Email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*contact information*/}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Address</span> {resumeDate.Address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Phone</span> {resumeDate.Phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Email</span> {resumeDate.Email}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Job</span> {resumeDate.Email}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Skype</span> {resumeDate.Email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className="contactInfo_socialsContainer">
                {Object.keys(resumeDate.socials).map((key) => (
                  <Grid item className="contactInfo_social">
                    <a href={resumeDate.socials[key].link}>
                      {resumeDate.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
