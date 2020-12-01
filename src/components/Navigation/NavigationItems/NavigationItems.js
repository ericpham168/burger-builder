import React from 'react'
import classes from './NavigationItems.module.css'
import Navigation from '../NavigationItems/NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.navigationItems}>
        <Navigation link="/">Builder</Navigation>
        <Navigation link="/checkout">Checkout</Navigation>
    </ul>
);

export default navigationItems;