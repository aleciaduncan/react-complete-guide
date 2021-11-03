import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";


const Expenses = ( props ) => {
    return (

        props.items.map( ({id, title, amount, date}) => {
            return (
                <ExpenseItem id={id} title={title} amount={amount} date={date}/>
            );
            
        })
    )
}

export default Expenses;