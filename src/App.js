import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New-Expense/NewExpense";



function App() {
let expense = [
  {
  title: 'Bike expense',
  amount: 200000,
  date: new Date('2024-03-12')
  },

  {
    title: 'Car expense',
    amount: 1000000,
    date: new Date('2024-03-13')
    },

    {
      title: 'Laptop',
      amount: 40000,
      date: new Date('2024-03-14')
      },

      {
        title: 'Iphone 15 Pro Max',
        amount: 100000,
        date: new Date('2024-03-15')
        }

]
  return (
    <>
      <NewExpense />
    {/* <h2>Let's Start Expense...!</h2> */}
    <Expenses item ={expense} />


    </>
  );
}

export default App;
