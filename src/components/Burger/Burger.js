import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {
    let transIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, id) => {
                return <BurgerIngredient key={igKey + id} type={igKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transIngredients.length === 0) {
        transIngredients = <p>Please adding some ingredients!</p>;
    }
    return (
        <div className={classes['burger']}>
            <BurgerIngredient type="bread-top" />
            {transIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger