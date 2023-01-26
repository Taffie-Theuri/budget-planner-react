import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const {dispatch} = useContext(AppContext)

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    })
  }
  return(
    <li className='bg-dark text-light list-group-item d-flex justify-content-between align-center'>
      {props.name}
      <div className='justify-content-center align-items-center'>
        <span className=' mr-3'>Ksh{props.cost}</span>
        {/* <button className='btn btn-outline-info edit-button'>Edit</button> */}
        <button className='btn btn-outline-info delete-button' onClick={handleDeleteExpense}>Delete</button>
      </div>

    </li>
  );
};
 

export default ExpenseItem
