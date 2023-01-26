import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: Ksh{props.budget}</span>
			<button type='button' className='btn btn-outline-info edit-budget-button' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;