import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./Budget";
import Remaining from "./Remaining";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseList from "./ExpenseList";
import AddExpenseForm from "./AddExpenseForm";
import { AppProvider } from "../context/AppContext";

function App() {
  return (
    <AppProvider>
    <div className="container">
<h1 className="mt-3"> Budget Planner App</h1>
<div className="row mt-3 p-4">
  <div className="col-sm">
    <Budget/>
  </div>
  <div className="col-sm">
    <Remaining/>
  </div>
  <div className="col-sm">
    <ExpenseTotal/>
  </div>

  </div>

  <h3 className="mt-3">Expenses</h3>
  <div className='row mt-2'>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>

  <h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>


</div>
</AppProvider>
  )
}

export default App
