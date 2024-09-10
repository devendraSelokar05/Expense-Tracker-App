import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const formattedDate = props.date instanceof Date
    ? props.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : props.date;
  return (
    <div>{formattedDate}</div>

  )
}

export default ExpenseDate