import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenseDataHandler =(enteredExpenseData) =>{
    const DataExpense ={
        ...enteredExpenseData,
    };
    props.SaveAppExpenseData(DataExpense);
    console.log(DataExpense)
  }

  return (
    <div className='new-expense'>
       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense