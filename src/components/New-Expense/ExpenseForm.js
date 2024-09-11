import { useState } from 'react'
import React from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {

    const [Enteredtitle, setEnteredtitle] =useState("");
    const [Enterdtamount, setEnteredamount] =useState("");
    const [Enterddate, setEntereddate] =useState("");
    const titleChangeHandler =(event) => {
        setEnteredtitle(event.target.value)
    }

    const amountChangeHandler =(event) => {
        setEnteredamount(event.target.value)
    }

    const dateChangeHandler =(event) => {
        setEntereddate(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const ExpenseData ={
            title: Enteredtitle,
            amount: Enterdtamount,
            date: new Date(Enterddate)

        }

        props.onSaveExpenseData(ExpenseData);
        console.log(ExpenseData)
        setEnteredtitle("");
        setEnteredamount("");
        setEntereddate("")
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense_controls'>
        <div className='new-expense_control'>
            <label>Title</label>
            <input onChange={titleChangeHandler} type="text" value ={Enteredtitle} />
        </div>
                <div className='new-expense_control'>
                <label>Amount</label>
                <input  onChange={amountChangeHandler}type="number" value={Enterdtamount} />
                </div>
                <div className='new-expense_control'>
                <label>Date</label>
                <input onChange={dateChangeHandler} type="date" value={Enterddate} />
                </div>
            <div className='new-expense_action'>
            {/* <i class="bi bi-cart-check"></i> */}
                <button type='submit' >Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm