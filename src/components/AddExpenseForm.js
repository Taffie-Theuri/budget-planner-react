import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

function AddExpenseForm(props) {
	const {dispatch} = useContext(AppContext);
	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		alert('name: ' + name + ' ' + 'cost: ' + cost)

		const expense = {

			id: uuidv4(),
			name: name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		})
	};

  return (
    <form onSubmit= {onSubmit}>
        <div className='row m-1 d-flex'>
			<div className='col-sm'>
				{/* <label htmlFor='name'>Description</label> */}
				<input
					placeholder='Description'
					required='required'
					type='text'
					className='form-control bg-dark text-light w-100'
					id='name'
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
			</div>
			<div className='col-sm'>
				{/* <label htmlFor='cost'>Cost</label> */}
				<input
					placeholder='Amount'
					required='required'
					type='number'
					className='form-control bg-dark text-light w-75'
					id='cost'
					value={cost}
					onChange={(event) => setCost(event.target.value)}
				/>
			</div>
			{/* <div className='col-sm m-3'>
				<button type='submit' className='btn btn-outline-info w-50 add-budget-button'>Add</button>
			</div> */}
		</div>
		<div className='row'>
			<div className='col-sm'>
				<button type='submit' className='btn btn-outline-info w-25 add-budget-button m-3'>Add</button>
			</div>
		</div>
    </form>
  )
}

export default AddExpenseForm
