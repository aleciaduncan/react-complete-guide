import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";


const Expenses = ( props ) => {
    return (
        <Card className="expenses">
            { props.items.map( ({id, title, amount, date}) => {
                return (
                    <ExpenseItem id={id} title={title} amount={amount} date={date}/>
                );
            }) }
        </Card>
    )
}

export default Expenses;