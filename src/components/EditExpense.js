import React, { useState } from 'react';

const EditExpense = (props) => {
	const [value, setValue] = useState(props.expenses);
	return (
		<>
			<input
				required='required'
				type='number'
				className='form-control bg-dark text-info edit-budget'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				className='btn btn-outline-info bg-dark text-light save-budget'
				onClick={() => props.handleSaveExpense(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditExpense;