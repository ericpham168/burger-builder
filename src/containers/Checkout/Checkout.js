import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Checkout extends Component {


    onCheckoutCancelHanler = () => {
        this.props.history.goBack();
    }

    onCheckoutContinueHanler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         if (param[0] === 'price') {
    //             price = param[1]
    //         }
    //         else {
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({ ingredients: ingredients, totalPrice: price })
    // }


    renderBody = () => {
        return this.props.totalPrice > 4 ? <>
            <CheckoutSummary onCheckoutCancel={this.onCheckoutCancelHanler}
                onCheckoutContinue={this.onCheckoutContinueHanler}
                ingredients={{ ...this.props.ings }}>
            </CheckoutSummary>
            <Route path={this.props.match.path + '/contact-data'}
                component={ContactData}></Route>
        </> : <Redirect to="/" />
    }

    render() {
        return (this.renderBody())
    }
}

const mapPropsToState = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice
    }
}


export default connect(mapPropsToState)(Checkout)