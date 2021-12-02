import React from 'react'
import './Top.css'
import { 
    Button,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import resumeDate from '../../util/resumeDate';
import CustomButton from '../Button/Button';
import { Link,NavLink,withRouter } from 'react-router-dom'
import {HomeRounded,SchoolRounded,WorkRounded,FaceBook,Twitter,LinkedIn,Github,Telegram} from '@material-ui/icons'

const Top = (props) => {
    const pathName = props?.location?.pathName;

    return (
        <Navbar expand ='lg' sticky ='top' className = 'header'>
             {/*Home link*/}
        <NavLink as ={NavLink} to ='/' className = 'header_navlink' >
            <Navbar.Brand className = 'header_home' >
             {/* <HomeRounded/> */}
            </Navbar.Brand>
             </NavLink>
             <Navbar.Toggle/>

             <Navbar.Collapse>
                 <Nav className  = 'header_left'>
                     {/*Resume link*/}
                     <NavLink 
                     as ={NavLink}
                     to = '/' 
                     className ={pathName == '/'? "header_link_active":"header_link"} >
                        Resume
                     </NavLink>

                     {/*Portfolio link*/}
                     <NavLink 
                     as ={NavLink}
                     to = '/portfolio' 
                     className ={pathName == '/portfolio'? "header_link_active":"header_link"} >
                        Portfolio
                     </NavLink>
                 </Nav>
                 <div className ='header_right'>
                     {Object.keys(resumeDate.socials).map((key) =>(
                         <a 
                         href ={resumeDate.socials[key].Link} 
                         target = "_blank">
                             {resumeDate.socials[key].icon} </a>
                     ))}
                      <CustomButton text={'Hire me'} icon ={<Telegram/>}/>
                 </div> 
             </Navbar.Collapse>

        </Navbar>
    )
}

export default withRouter(Top)
