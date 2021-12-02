import {
  Tabs,
  Grid,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import React, { useState } from "react";
import { ImageGallary } from "../../components/ImageGallery/ImageGallery";
import resumeDate from "../../util/resumeDate";
import "./Portfolio.css";
import ImageGallery from 'react-image-gallery';
const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);
  return (
    <Grid container spacing={2} className="section pb_45 pt_45">
      {/* Title */}
      <Grid item className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>
      {/* Tab */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customeTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="ALL"
            value="ALL"
            className={
              tabValue == "ALL" ? "customeTabs_item active" : "customeTabs_item"
            }
          />
          {[...new Set(resumeDate.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == tag
                    ? "customeTabs_item active"
                    : "customeTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeDate.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == "ALL" ? (
                <Grid item xs={12} sm={6} md ={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customeCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customeCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography variant={'body2'} className="customeCard_title">
                            {project.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            className="customeCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} className ="projectDialog" fullWidth  maxWidth ={"md"}>
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        {/* <img src={projectDialog.image} alter="hhh" className="projectDialog_image" /> */}
        <DialogContent style ={{height:"80vh"}}>
          {projectDialog.images && (
            <ImageGallary images ={projectDialog.images}/>
          )}             
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target="_blank" className="projectDialog_icon">
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
