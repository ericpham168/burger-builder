import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import Aux from '../../../hoc/Auxilary/Auxilary'

const sideDrawer = (props) =>{
    let sideDrawerClasses =[classes.sideDrawer, classes.close];
    if(props.open){
        sideDrawerClasses = [classes.sideDrawer, classes.open]
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.clicked}></BackDrop>
            <div className={sideDrawerClasses.join(' ')}>
                <div className={classes.logo}>
                    <Logo/>
                </div>
                <nav>
                <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;