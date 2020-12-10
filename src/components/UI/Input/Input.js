import React from 'react';
import './Input.css'

const Input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case "input": inputElement = <input key={props.Key} className="Input"
            {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case "textarea": inputElement = <textarea key={props.Key} {...props.elementConfig}
            value={props.value} onChange={props.changed} />
            break;
        case "select": inputElement = (
            <select key={props.Key} className="Input"
                value={props.value} onChange={props.changed}>
                {props.elementConfig.options.map(option => {
                    return <option key={option.value} value={option.value}>
                        {option.displayValue}</option>
                })}
            </select>
        )
            break;
        default:
            inputElement = <input key={props.Key} className="Input"
                {...props.elementConfig} value={props.value} onChange={props.changed} />
    }

    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;