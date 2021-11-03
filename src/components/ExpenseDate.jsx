import Card from "./Card";
import "./ExpenseDate.css";

const ExpenseDate = ( props ) => {
    const month = props.date.toLocaleString("en-US", { month : "long" });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-US", { day : "2-digit"});
    

    return (
        <Card className="expense-date">
            <span className="expense-date__month"> { month } </span>
            <span className="expense-date__year"> { year } </span>
            <span className="expense-date__day"> { day } </span>
        </Card>
    )
}

export default ExpenseDate;