import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../Card UI/Card'
const Expenses = (props) => {
    const item =props.item
  return (
 <Card className='expenses'>

    {
      props.item.map(
        (expense) => (
          <ExpenseItem 
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))
    }
         

 </Card>
  )
}

export default Expenses


 {/* <ExpenseItem 
        date={item[0].date}
        title={item[0].title}
        amount={item[0].amount}
      />
      <ExpenseItem 
        date={item[1].date}
        title={item[1].title}
        amount={item[1].amount}
      />
      <ExpenseItem 
        date={item[2].date}
        title={item[2].title}
        amount={item[2].amount}
      />
      <ExpenseItem 
        date={item[3].date}
        title={item[3].title}
        amount={item[3].amount}
      /> */}