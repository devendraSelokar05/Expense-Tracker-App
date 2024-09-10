
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Card UI/Card.js';

const ExpenseItem = (props) => {

  

  return (
    <>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item_description'>
          <h2>{props.title}</h2>
          <div className='expense-item_price'>Rs {props.amount}</div>
        </div>
       
      </Card>
    </>
  );
};

export default ExpenseItem;
