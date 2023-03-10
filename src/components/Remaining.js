import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


function Remaining() {
  const {expenses, budget} = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  
  const alertType = totalExpenses > budget? 'alert-danger' : 'alert-success'
  return (
    <div className= {`alert w-75 ${alertType}`}>
      <span>Remaining: Ksh {budget-totalExpenses}</span>
    </div>
  )
}

export default Remaining
