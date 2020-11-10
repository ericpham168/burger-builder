import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'}
]

const BuildControls = (props) => (
    <div className={classes.buildControls}>
        <p>Current Price <strong>{props.price.toFixed(2)}</strong> </p>
        {controls.map(ctrl => {
            return <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=>{props.ingredientAdded(ctrl.type)}}
            removed ={()=>{props.ingredientRemoved(ctrl.type)}}
            disabledIng = {props.disabledIngs[ctrl.type]}
            />
        })}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.order}>ORDER NOW</button>

    </div>
    
)

export default BuildControls;