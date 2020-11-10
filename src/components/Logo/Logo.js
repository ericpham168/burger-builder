import React from 'react'

import burgerLogo from '../assests/images/burger-logo.png'
import classes from './Logo.module.css'
const logo = (props) =>(
    <div className={classes.logo}>
        <img src={burgerLogo} alt="logo-burger"></img>
    </div>
);

export default logo;