import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import * as actionCreator from '../../../containers/store/actions/index'
import { connect } from 'react-redux'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHanler = (event) => {
        event.preventDefault();
        const order = {
            ingredient: this.props.ings,
            price: this.props.totalPrice,
            customer: {
                name: 'Small',
                address: {
                    street: 'binh thanh',
                    phoneNum: '0782121999',
                },
                age: '22'
            },
            dilivery: 'tiki'
        }
        this.props.onSendOrder(order);
    }

    renderBody() {
        return this.props.loading ? <Spinner /> : <div className={classes.contactData}>
            <h3>Enter your contact data</h3>
            <form>
                <input type="text" name="Name" placeholder="Your name"></input>
                <input type="text" name="Email" placeholder="Your email"></input>
                <input type="text" name="Street" placeholder="Your street"></input>
                <input type="text" name="PostalCode" placeholder="Your PostalCode"></input>
            </form>
            <Button btnType="Success" clicked={this.orderHanler}>ORDER</Button>
        </div>
    }


    render() {
        return (
            this.renderBody()
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSendOrder: (order) => dispatch(actionCreator.sendOrder(order))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);