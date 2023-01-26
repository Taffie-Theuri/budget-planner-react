import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function ExpenseTotal() {
  const {expenses}  = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0)
  return (
    <div className='alert alert-primary w-75 bg-dark text-primary'>
      <span>Spent so far: Ksh {totalExpenses}</span>
    </div>
  )
}

export default ExpenseTotal
