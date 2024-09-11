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

