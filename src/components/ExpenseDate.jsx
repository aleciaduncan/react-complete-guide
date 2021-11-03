import "./ExpenseDate.css";

const ExpenseDate = ( props ) => {
    const month = props.date.month.toISOString();
    const year = "year";
    const day = "day";

    return (
        <div className="expense-date">
            <p className="expense-date__month"> { month } </p>
            <p className="expense-date__year"> { year } </p>
            <p className="expense-date__day"> { day } </p>
        </div>
    )
}

export default ExpenseDate;