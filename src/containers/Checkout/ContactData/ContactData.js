import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import * as actionCreator from '../../../containers/store/actions/index'
import { connect } from 'react-redux'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "your name"
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "your street"
                },
                value: ''
            },
            phoneNumb: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "your mobilePhone"
                },
                value: ''
            },
            age: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: '19', displayValue: '19' },
                        { value: '20', displayValue: '20' },
                        { value: '21', displayValue: '21' },
                        { value: '22', displayValue: '22' },
                    ]
                },
                value: ''
            },
        }
    }

    orderHanler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredient: this.props.ings,
            price: this.props.totalPrice,
            customer: formData
        }
        this.props.onSendOrder(order);
    }

    renderBody() {
        const formElementArr = [];
        for (let key in this.state.orderForm) {
            formElementArr.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }


        return this.props.loading ? <Spinner /> : <div className={classes.contactData}>
            <h3>Enter your contact data</h3>
            <form onSubmit={this.orderHanler}>
                {formElementArr.map(formElement => (
                    <Input Key={formElement.id} elementType={formElement.config.elementType}
                        changed={(event) => this.inputChangedhandler(event, formElement.id)} elementConfig={formElement.config.elementConfig} value={formElement.config.value}></Input>
                ))}
                <Button key="btnOrder" btnType="Success">ORDER</Button>
            </form>
        </div >
    }

    inputChangedhandler = (event, inputIdentifier) => {
        const updatedOrderForm = { ...this.state.orderForm };
        const updateFormElement = { ...updatedOrderForm[inputIdentifier] };
        updateFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updateFormElement;
        this.setState({ orderForm: updatedOrderForm });
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