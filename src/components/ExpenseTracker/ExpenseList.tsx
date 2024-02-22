
interface Expense{
    description: string,
    amount: number,
    category: string,
    id: number
}

interface Props{
    expenses : Expense[];
    onDelete : (id: number) => void;
}

const ExpenseList = ({expenses, onDelete}: Props) => {
    if(expenses.length === 0) return null;

  return (
    <table className="table table-bordered">
        <thead>
            <tr>
                <td>Description</td>
                <td>Amount</td>
                <td>Category</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            {expenses.map(ex => <tr key={ex.id}>
                <td>{ex.description}</td>
                <td>{ex.amount}</td>
                <td>{ex.category}</td>
                <td><button className='btn btn-danger' onClick={() => onDelete(ex.id)}>Delete</button></td>
            </tr>)}
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td>{expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
  )
}

export default ExpenseList