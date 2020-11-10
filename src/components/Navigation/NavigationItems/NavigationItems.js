import React from 'react'
import classes from './NavigationItems.module.css'
import Navigation from '../NavigationItems/NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.navigationItems}>
        <Navigation link="/" active>Burger Builder</Navigation>
        <Navigation link="/">Burger Checkout</Navigation>
    </ul>
);

export default navigationItems;