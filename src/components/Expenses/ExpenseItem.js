import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    //setTitle("Updated!");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button className="expense-item__price" style={{marginLeft:'5px'}} onClick={clickHandler}>Edit</button>
      </Card>
    </li>
  );
};
export default ExpenseItem;
