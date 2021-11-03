import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


const ExpenseItem = props => {
    const date = props.date;
    return (
        <div className="expense-item"> 
            <ExpenseDate date={date}/>
            <h2 className="expense-item__description">
                { props.title }
            </h2>
            <p
            className="expense-item__price">
                $ { props.amount }
            </p>
        </div>
    )
}

export default ExpenseItem;