import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTube from "@material-ui/icons/YouTube";
import AndroidIcon from "@material-ui/icons/Android";
import WebIcon from "@material-ui/icons/Web";
import Language from "@material-ui/icons/Language";
import Developer from "@material-ui/icons/DeveloperBoard";
export default {
  name: "Henok Addis",
  title: "Full stack developer",
  birthday: "5 April 1998",
  Email: "henokaddis72@gmail.com",
  Address: "Addis Ababa,Ethiopia",
  Phone: "+251993934377",
  socials: {
    Facebook: {
      link: "https:facebook.com",
      text: "Henok Addis",
      icon: <FacebookIcon />,
    },
    twitter: {
      link: "https://twitter.com",
      text: "My twitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com",
      text: "My LinkedIn",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/henok2019",
      text: "My Github",
      icon: <GitHubIcon />,
    },
  },
  About:
    "I am a BSc graduate with software Engineering from Addis Ababa University. While in my campus, I worked for many hours with my best team members to work hard and get experience with software development. I learned about who to develop software’s, web development and android application development from beginning to result. Being the part of the process made me realize how much I love the software engineering. What ever be the situation and time I never tired of doing my software projects like web development and android app developments. During those years, I realize that this is what I went to do my whole life, not just as a helper but as a professional. \n\nOnce my mind was set, I started seeing the entire process in a different light. Even my teachers think that am a natural at it.my educational mind set is simple: stability and function. I have the determination to study comprehensively, and I hate shortcuts. A trait that has given me a vast knowledge spectrum. I have even enrolled in my class that given me a crossover of software development significant and comprehensive view of how things are done. To become analytical, creative and experienced Software Engineer working for a modern, client focused, detail-oriented technology company which encourages excellent creative work and client service. \nTo become analytical, creative and experienced Software Engineer working for a modern, client focused, detail-oriented technology company which encourages excellent creative work and  client service.",
  experiances: [
    {
      title: "work-experiance one",
      date: "2017-2018",
      description: "working with python game development and web developer with HTML and CSS ",
    },
    {
      title: "work-experiance two",
      date: "2018-2019",
      description: "web development with java spring boot, javascript and ASP.net framework & android app development with java and kotlin.",
    },
    {
      title: "work-experiance Three",
      date: "2020-2021",
      description: "full stack developer with private company with react,material UI and style components and backend with nodejs,express and mongodb.",
    },
  ],
  educations: [
    {
      title: "Primary Education",
      date: "2005-2013",
      description: "I was learn from Tilili primary school.",
    },
    {
      title: "Secondary Education",
      date: "2014-2016",
      description:
        "I was natural science student in my high school and preparatory school.",
    },
    {
      title: "University Education",
      date: "2017-2021",
      description: "To become analytical, creative and experienced software engineer",
    },
  ],
  services: [
    {
      title: "Web-development",
      description: "I have been a web developer for 4 years ",
      icon: <WebIcon />,
    },
    {
      title: "Android developer",
      description: "I have been a android developer for 2 years ",
      icon: <AndroidIcon />,
    },
    {
      title: "full-stack developer",
      description: "I have been a web developer for 4 years ",
      icon: <Developer />,
    },
  ],
  skills: [
    {
      title: "Frontend",
      description: [
        "Javascript",
        "Reactjs",
        "Typescript",
        "Material UI",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      description: ["Nodejs", "Java", "Python", "ruby"],
    },
    {
      title: "Databases",
      description: ["MongoDB", "MySQL", "ms SQL", "server", "Firebase"],
    },
    {
      title: "Source Control",
      description: ["Git", "Github", "SCRUM/agile"],
    },
  ],
  projects: [
    {
      tag: "React",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Freactjsexample.com%2Fcontent%2Fimages%2F2019%2F11%2F01.jpg&imgrefurl=https%3A%2F%2Freactjsexample.com%2Freact-particles-animation-background-component%2F&tbnid=gphugEQMwOtp_M&vet=12ahUKEwi2qa_Hg-byAhUaKRQKHRBsChMQMygHegUIARC_AQ..i&docid=vTXEWcJTOV-DYM&w=1972&h=1376&q=background%20pictures%20for%20react%20project&ved=2ahUKEwi2qa_Hg-byAhUaKRQKHRBsChMQMygHegUIARC_AQ",
      title: "React Project1",
      caption: "A short description about my project",
      description:
        "This is my react web project description. please fill it in",
      links: [
        { link: "https://www.google.com/", icon: <YouTube /> },
        { link: "https://www.goeogle.com/", icon: <GitHubIcon /> },
        { link: "https://www.google.com/", icon: <Language /> },
      ],
    },
    {
      tag: "React",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fsun%2F&tbnid=L8xfQakH9a8tJM&vet=12ahUKEwi5jYf4m_DyAhXO0-AKHeusBIAQMygDegUIARDQAQ..i&docid=T5n6IXZ5nFRelM&w=771&h=480&q=image&ved=2ahUKEwi5jYf4m_DyAhXO0-AKHeusBIAQMygDegUIARDQAQ",
      title: "React Project2",
      caption: "A short description about my project",
      description:
        "This is my react web project description. please fill it in",
      links: [
        { link: "https://www.google.com/", icon: <YouTube /> },
        { link: "https://www.google.com/", icon: <GitHubIcon /> },
        { link: "https://www.google.com/", icon: <Language /> },
      ],
    },
    {
      tag: "React",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Freactjsexample.com%2Fcontent%2Fimages%2F2019%2F11%2F01.jpg&imgrefurl=https%3A%2F%2Freactjsexample.com%2Freact-particles-animation-background-component%2F&tbnid=gphugEQMwOtp_M&vet=12ahUKEwi2qa_Hg-byAhUaKRQKHRBsChMQMygHegUIARC_AQ..i&docid=vTXEWcJTOV-DYM&w=1972&h=1376&q=background%20pictures%20for%20react%20project&ved=2ahUKEwi2qa_Hg-byAhUaKRQKHRBsChMQMygHegUIARC_AQ",
      title: "React Project3",
      caption: "A short description about my project",
      description:
        "This is my react web project description. please fill it in",
      links: [
        { link: "https://www.google.com/", icon: <YouTube /> },
        { link: "https://www.google.com/", icon: <GitHubIcon /> },
        { link: "https://www.google.com/", icon: <Language /> },
      ],
    },
    {
      tag: "Python",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Freactjsexample.com%2Fcontent%2Fimages%2F2019%2F11%2F01.jpg&imgrefurl=https%3A%2F%2Freactjsexample.com%2Freact-particles-animation-background-component%2F&tbnid=gphugEQMwOtp_M&vet=12ahUKEwi2qa_Hg-byAhUaKRQKHRBsChMQMygHegUIARC_AQ..i&docid=vTXEWcJTOV-DYM&w=1972&h=1376&q=background%20pictures%20for%20react%20project&ved=2ahUKEwi2qa_Hg-byAhUaKRQKHRBsChMQMygHegUIARC_AQ",
      title: "Python Project",
      caption: "A short description about my project",
      description:
        "This is my react web project description. please fill it in",
      links: [
        { link: "https://www.google.com/", icon: <YouTube /> },
        { link: "https://www.google.com/", icon: <GitHubIcon /> },
        { link: "https://www.google.com/", icon: <Language /> },
      ],
    },
    {
      tag: "Java",
      image:
        "https://freshdesignweb.com/free-hotel-website-templates/",
      title: "Java Project",
      caption: "A short description about my project",
      description:
        "This is my react web project description. please fill it in",
      links: [
        { link: "https://www.google.com/", icon: <YouTube /> },
        { link: "https://www.google.com/", icon: <GitHubIcon /> },
        { link: "https://www.google.com/", icon: <Language /> },
      ],
    },
    {
      tag: "Angular",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Freactjsexample.com%2Fcontent%2Fimages%2F2019%2F11%2F01.jpg&imgrefurl=https%3A%2F%2Freactjsexample.com%2Freact-particles-animation-background-component%2F&tbnid=gphugEQMwOtp_M&vet=12ahUKEwi2qa_Hg-byAhUaKRQKHRBsChMQMygHegUIARC_AQ..i&docid=vTXEWcJTOV-DYM&w=1972&h=1376&q=background%20pictures%20for%20react%20project&ved=2ahUKEwi2qa_Hg-byAhUaKRQKHRBsChMQMygHegUIARC_AQ",
      title: "Angular Project",
      caption: "A short description about my project",
      description:
        "This is my react web project description. please fill it in",
      links: [
        { link: "https://www.google.com/", icon: <YouTube /> },
        { link: "https://www.google.com/", icon: <GitHubIcon /> },
        { link: "https://www.google.com/", icon: <Language /> },
      ],
    },
  ],
};
