import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpensesData) => {
    const expensesData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };
    console.log(expensesData);
    props.onAddNewExpenses(expensesData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expenses</button>
      )}
      {isEditing && (
        <ExpenseForm
          onStopEditing={stopEditingHandler}
          onSaveExpensesData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
