import React, { useContext }from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import App from '../App';


const ExpenseList = () => {
  const expenses = [
    { id: 415626, name: "Transport", cost: 1000},
    { id: 425626, name: "Rent", cost: 5000},
    { id: 435626, name: "Upkeep", cost: 2500},
    { id: 445626, name: "Entertainment", cost: 3000},
    { id: 455626, name: "Shopping", cost: 4000},
  ] 
  
  return (
    <ul
      className='bg-dark text-light list-group'>
        {expenses.map((expense) =>(
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}/>
          
        ))}
    </ul>

    
  );
};

export default ExpenseList
