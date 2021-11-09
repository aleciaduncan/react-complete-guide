import React from "react";
import "./ExpensesFilter.css";



const ExpensesFilter = (props) => {
    const filterSelection = (event) => props.onFilteredYear(event.target.value.toString());
    
    return (
    <div className="expenses-filter">
        <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select className="dropdown-content" onChange = { filterSelection } value={ props.selected }>
                <option value="2018" className="dropdown-year" >2018</option>
                <option value="2019" className="dropdown-year">2019</option>
                <option value="2020" className="dropdown-year">2020</option>
                <option value="2021" className="dropdown-year">2021</option>
            </select>
        </div>
    </div>
    );
};

export default ExpensesFilter;