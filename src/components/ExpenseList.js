import React, { useContext, useEffect, useState }from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';


const ExpenseList = () => {
  const {expenses} = useContext(AppContext)
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || [])

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses])
  
  const handleSearch = (event) => {
    const filteredResults = expenses.filter((filteredExpense) => 
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setFilteredExpenses(filteredResults)
  };
  
  return (
    <>
      <input className="form-control m-3 w-50" type="text" placeholder="Type to search" onChange={handleSearch}/>
      <ul
        className='bg-dark text-light list-group m-3'>
          {filteredExpenses.map((expense) =>(
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}/>

          ))}
      </ul>
    </>
  );
};

export default ExpenseList
