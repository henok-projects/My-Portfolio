import { Typography } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import resumeDate from '../../util/resumeDate'

const Footer = () => {
    return (
        <div className ='footer'>
         <div className ='footer_left'>
             <Typography className ='footer_name'>{resumeDate.name}</Typography>
             </div>   
         <div className ='footer_right'>
         <Typography className ='footer_copyright'>
             Design and Developed By <a href ='/' target ='_blank'>Henok Addis</a>
             <br/>
             <a href ='linkedin.com/in/henok-addis-bb1484174/' target ='_blank'>view at LinkedIn</a>.
         </Typography>
             </div>  
        </div>
    )
}

export default Footer
