import { object } from 'prop-types';
import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css'
const navigationItem = (props) => (
    <li className={classes.navigationItem}>
        <NavLink exact to={props.link}
            activeStyle={{
                color: '#FFF',
                backgroundColor: '#8F5C2C',
                borderBottom: '4px solid #40A4C8',
            }}
        >{props.children}</NavLink>
    </li>
);

export default navigationItem;