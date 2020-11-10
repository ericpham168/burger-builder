import React from 'react'
import classes from './ToolBar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle'


const toolBar = (props) =>(
    <div className={classes.toolbar}>
        <DrawToggle clicked={props.drawerToogleClicked}/>
            <div className={classes.logo}>
            <Logo/>
            </div>
        <nav className={classes.desktopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
    </div>
)

export default toolBar;