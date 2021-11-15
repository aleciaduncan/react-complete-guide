import React, { useState } from 'react';
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';


const Expenses = ( props ) => {
    const [ filteredYear, setFilteredYear ] = useState('2021');
    const expenseFilterHandler = (year) => {
        setFilteredYear(year);
    };
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    });
    return (
        <Card className="expenses">
            <ExpensesFilter selected={ filteredYear } onFilteredYear={ expenseFilterHandler }/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={ filteredExpenses }/>
        </Card>
    )
};
export default Expenses;