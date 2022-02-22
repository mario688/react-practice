import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");
  const saveValueHandler = (valueYear) => {
    setfilteredYear(valueYear);
  };

  const filteredArrayByYear = props.expenses.filter((element) => {
    return element.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={saveValueHandler}
        />
        <ExpensesChart expense={filteredArrayByYear} />
        <ExpensesList filteredExpenses={filteredArrayByYear} />
      </Card>
    </div>
  );
}

export default Expenses;
