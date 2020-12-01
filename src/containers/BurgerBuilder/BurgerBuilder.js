import React, { Component } from 'react'
import Aux from '../../hoc/Auxilary/Auxilary'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axiosIN from '../../Axios-order';
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actionCreator from '../store/actions/index'
import { connect } from 'react-redux'


class BurgerBuilder extends Component {
    state = {
        purchasable: false,
        purchasing: false,
        loading: false
    }


    componentDidMount() {
        this.props.onInitIngredients();
    }

    purchaseCancelHander = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        // this.setState({loading: true})
        // const order = {
        //     ingredient: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer:{
        //         name: 'Small',
        //         address: {
        //             street: 'binh thanh',
        //             phoneNum: '0782121999',
        //         },
        //         age: '21'
        //     },
        //     dilivery: 'tiki'
        // }
        // axiosIN.post('/order.json',order)
        // .then(respone => {            
        //     this.setState({loading: false, purchasing: false})
        // })
        // .catch(err => {console.log(err)
        //     this.setState({loading: false, purchasing: false})
        // });



        // const queryParams = [];
        // for (let i in this.props.ings) {
        //     queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.props.ings[i]));
        // }
        // queryParams.push('price=' + this.props.totalPrice);
        // const queryString = queryParams.join('&')
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryString
        // });

        this.props.history.push('/checkout');
    }

    purchasingHandler = () => {
        this.setState({ purchasing: true })
    }

    purchasingCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    updatePurchaseState(ingredients) {
        let sum = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey];
        })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)

        return sum > 0;
    }

    render() {
        let disabledIngredients = { ...this.props.ings };
        let ordrerSummary = null;
        let burger = this.props.err ? <p>this state cannot be loadd</p> : <Spinner />


        for (let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }

        if (this.props.ings !== null) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabledIngs={disabledIngredients}
                        price={this.props.totalPrice}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        order={this.purchasingHandler}
                    />
                </Aux>
            );

            ordrerSummary = <OrderSummary purchaseContinued={this.purchaseContinueHandler}
                price={this.props.totalPrice}
                purchaseCanceled={this.purchaseCancelHander}
                ingredients={this.props.ings} />
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchasingCancelHandler}>
                    {ordrerSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        err: state.burgerBuilder.err
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actionCreator.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actionCreator.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actionCreator.initIngredients()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axiosIN));