import { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [addIsActive, setAddIsActive] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData)
    activeHandler()
  };

  const activeHandler = () => {
    // 👇️ passed function to setState
    setAddIsActive(current => !current);
  };

  return (
    <div className="new-expense">
      {addIsActive && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={activeHandler}/>}
      {!addIsActive && <button onClick={activeHandler}>Add New Expense</button>}
    </div>
    )
  
};

export default NewExpense;
