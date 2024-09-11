import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New-Expense/NewExpense";
import { useState } from "react";



let Manual_Data =[
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

function App() {
  const [expenses, setExpenses] = useState(Manual_Data);
  const saveDataExpenseDataHandler =(expense) =>{
    setExpenses((prevExpense) =>{
      return[expense, ...prevExpense]
    })
  }
  


  return (
    <>
      <NewExpense SaveAppExpenseData ={saveDataExpenseDataHandler} />
    {/* <h2>Let's Start Expense...!</h2> */}
    <Expenses item ={expenses} />


    </>
  );
}

export default App;
