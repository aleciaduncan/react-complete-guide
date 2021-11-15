import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [ enteredAmount, setEnteredAmount ] = useState('');
    const [ enteredDate, setEnteredDate ] = useState('');
    const [ enteredTitle, setEnteredTitle ] = useState('');
    const [ showForm, setShowForm] = useState(false);
    
    //Handlers for Add New Expense and Cancel Buttons
    const addExpenseClickHandler = () => setShowForm(true);   
    const cancelHandler = () => setShowForm(false);
    
    //Handlers for form entry
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)};

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)};

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)};


    //Handler for form submission
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
        
    };
    
    
    //Conditionally based on showForm state
    if (showForm === false){
        return (
            <button onClick={ addExpenseClickHandler }>Add New Expense</button>
        )
    };

    return (
    <form onSubmit={ submitHandler }>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={ enteredTitle } onChange={ titleChangeHandler }/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={ amountChangeHandler }/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-11-01" max="2024-11-01" onChange={ dateChangeHandler } />
            </div>
        </div>
        <div className="new-expense__actions">
            <button className="new_expense__cancel" onClick={ cancelHandler }>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;