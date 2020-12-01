import * as actionTypes from './actionTypes'
import axiosIN from '../../../Axios-order';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

export const fetchIngredientFailed = () => {
    return {
        type: actionTypes.FET_INGREDIENT_FAILED
    }
}

export const initIngredients = () => {
    return dispatch => {
        axiosIN.get('/ingredients.json')
            .then(respone => {
                dispatch(setIngredients(respone.data));
            })
            .catch(err => {
                dispatch(fetchIngredientFailed)
                console.log('toang')
            })
    }
}