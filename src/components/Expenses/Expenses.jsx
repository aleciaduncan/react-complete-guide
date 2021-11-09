import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = ( props ) => {
    const [ filteredYear, setFilteredYear ] = useState('2021');
    const expenseFilterHandler = (year) => {
        setFilteredYear(year);
        console.log('click', filteredYear);
    }
    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={ filteredYear } onFilteredYear={ expenseFilterHandler }/>
            <div>
                { props.items.map( ({id, title, amount, date}) => {
                    return (
                        <ExpenseItem id={id} title={title} amount={amount} date={date}/>
                    );
                }) }
            </div>
        </Card>
        
    )
}

export default Expenses;