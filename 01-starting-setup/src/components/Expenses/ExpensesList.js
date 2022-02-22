import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <p className="expenses-list__fallback">Not found expenses</p>;
  }
  if (props.filteredExpenses.length > 0) {
    return (
      <ul className="expenses-list">
        {props.filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
