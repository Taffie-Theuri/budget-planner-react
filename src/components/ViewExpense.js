import React from 'react';

const ViewExpense = (props) => {
	return (
		<>
			<span>{props.cost}</span>
			<button type='button' className='btn btn-outline-info edit-budget-button' onClick={props.handleEditExpense}>
				Edit
			</button>
		</>
	);
};

export default ViewExpense;