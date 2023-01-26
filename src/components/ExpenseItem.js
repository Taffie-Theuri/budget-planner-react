import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import EditExpense from './EditExpense';
import ViewExpense from './ViewExpense';

const ExpenseItem = (props) => {
  const { expenses, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditExpense = () => {
		setIsEditing(true);
	};

	const handleSaveExpense = (value) => {
		dispatch({
			type: 'SET_EXPENSE',
			payload: value,
		});
		setIsEditing(false);
	};

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
        {/* {isEditing ? (
			  	<EditExpense handleSaveExpense={handleSaveExpense} expenses={expenses} />
			  ) : (
			  	<ViewExpense handleEditExpense={handleEditExpense} expenses={expenses} />
			  )} */}
        <button className='btn btn-outline-info delete-button' onClick={handleDeleteExpense}>Delete</button>
      </div>

    </li>
  );
};
 

export default ExpenseItem
