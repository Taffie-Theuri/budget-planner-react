import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider className='app-provider'>
      <div className="bg-dark text-light ">
        <div className="row">
          <h3 className="text-info logo">MTD</h3>
        </div>
        <h1 className="d-flex justify-content-center align-items-center budget-planner"> Budget Planner App</h1>
        <div className="row mt-3">
          {/* Add Expense  */}
          <h3 className='add-expense'>Add Expense</h3>
				  <div className='row mt-3'>
				  	<div className='col-sm'>
				  		<AddExpenseForm />
				  	</div>
				  </div>
          {/* Budget  */}
          <div className="col">
            <Budget/>
          </div>
          {/* Balance */}
          <div className="col">
            <Remaining/>
          </div>
          {/* Spent So far  */}
          <div className="col">
            <ExpenseTotal/>
          </div>
        </div>
        {/* Expense list  */}
        <h3 className="m-3">Expenses</h3>
        <div className='row mt-2'>
	      	<div className='col-sm'>
	      		<ExpenseList />
	      	</div>
	      </div>
      </div>
    </AppProvider>
  )
}

export default App
