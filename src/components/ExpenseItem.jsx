import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


const ExpenseItem = props => {
    return (
        <div className="expense-item"> 
            <ExpenseDate />
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