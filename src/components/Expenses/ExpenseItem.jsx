import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
    const [ title, setTitle ] = useState(props.title);
    
    let date = props.date;
    

    const clickHandler = () => {
        setTitle('Updated!');
    }; 

    return (      
        <Card className="expense-item"> 
            <ExpenseDate date={ date }/>
            <div className="expense-item__description">
                <h2>{ title }</h2>
            </div>
            <div
            className="expense-item__price">
                $ { props.amount }
            </div>
            <button onClick={ clickHandler }>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;