import React, { useContext }from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import App from './App';


const ExpenseList = () => {
     const expenses = [
      { id: 435626, name: "Transport", cost: 1000},
      { id: 435626, name: "Rent", cost: 5000},
      { id: 435626, name: "Upkeep", cost: 2500},
      { id: 435626, name: "Entertainment", cost: 3000},
      { id: 435626, name: "Shopping", cost: 4000},
    ] 
  
  return (
    
        <ul
            className= 'list-group'>
              {expenses.map((expense) =>(
                <ExpenseItem
                  id={expense.id}
                  name={expense.name}
                  cost={expense.cost}/>
                
              ))}
        </ul>

    
  );
};

export default ExpenseList
