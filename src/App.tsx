import { useState } from "react";
import ExpenseFilter from "./components/ExpenseTracker/ExpenseFilter";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";
import categories from "./components/ExpenseTracker/categories";
import ExpenseForm from "./components/ExpenseTracker/ExpenseForm";

function App()
{
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpense] = useState([
    {id: 1,description : 'aaa', amount : 10, category : 'Veg'},
    {id: 2,description : 'bbb', amount : 10, category : 'Veg'},
    {id: 3,description : 'ccc', amount : 10, category : 'Veg'},
    {id: 4,description : 'ddd', amount : 10, category : 'Veg'}
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;

  return <div>
    <div className="mb-5">
      <ExpenseForm onSubmit={(expense) => setExpense([...expenses, {...expense, id: expenses.length +1}])} />
    </div>
    <div className="mb-3">
      <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
    </div>
    <ExpenseList expenses={visibleExpenses} onDelete={(id)=> setExpense(expenses.filter(e => e.id !== id))} />
  </div>
}

export default App
