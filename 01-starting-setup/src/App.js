import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const expensesArray = [
  { id: "e1", title: "computer", amount: 21.2, date: new Date(2022, 2, 12) },
  { id: "e2", title: "auto", amount: 212.2, date: new Date(2021, 2, 12) },
  { id: "e3", title: "dom", amount: 2131.22, date: new Date(2020, 2, 12) },
  { id: "e4", title: "dom 2", amount: 2131.22, date: new Date(2020, 2, 12) },
  { id: "e5", title: "telefon", amount: 45.22, date: new Date(2022, 3, 12) },
];

const App = () => {
  const [expenses, setExpenses] = useState(expensesArray);

  const addExpensesHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddNewExpenses={addExpensesHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
