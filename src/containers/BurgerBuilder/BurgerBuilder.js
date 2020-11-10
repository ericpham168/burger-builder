import React ,{Component}from 'react'
import Aux from '../../hoc/Auxilary/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICE = {
    salad : 0.4,
    cheese: 0.5,
    meat: 1.6,
    bacon: 0.9
}

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    purchaseCancelHander = () =>{
        alert('continue');
    }

    purchaseContinueHander = () =>{
        alert('continue');
    }

    purchasingHandler = () =>{
        this.setState({purchasing: true})
    }

    purchasingCancelHandler = () =>{
        this.setState({purchasing: false})
    }

    updatePurchaseState(ingredients){
        let sum = Object.keys(ingredients).map((igKey)=>{
            return ingredients[igKey];
        })
        .reduce((sum,el)=>{
            return sum + el;
        },0)

        this.setState({purchasable: sum > 0})
    }

    addIngredient = (type) =>{
        let oldCount = this.state.ingredients[type];
        let updatedCount = oldCount + 1;
        let  updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        let oldPrice = this.state.totalPrice;
        let additionalPrice = INGREDIENT_PRICE[type];
        let newPrice = oldPrice + additionalPrice;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredient = (type) =>{
        let oldCount = this.state.ingredients[type];
        if(oldCount >0){
            let updatedCount = oldCount - 1;
            let  updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = updatedCount;
            let oldPrice = this.state.totalPrice;
            let deductionalPrice = INGREDIENT_PRICE[type];
            let newPrice = oldPrice - deductionalPrice;
            this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
            this.updatePurchaseState(updatedIngredients);
        }
    }

    render(){
        let disabledIngredients = {...this.state.ingredients};
        for(let key in disabledIngredients){
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchasingCancelHandler}>
                    <OrderSummary purchaseContinued={this.purchaseContinueHander}
                     price = {this.state.totalPrice}
                     purchaseCanceled={this.purchaseCancelHander}
                     ingredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredient} 
                ingredientRemoved={this.removeIngredient}
                disabledIngs={disabledIngredients}
                price = {this.state.totalPrice}
                purchasable = {this.state.purchasable}
                order ={this.purchasingHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;