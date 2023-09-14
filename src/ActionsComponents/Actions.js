import { useState } from "react";
import { Button } from "./Button";
import './actionsStyles.css';

export function Actions({
  currUser,
  paying,
  onPaying,
  totalBill,
  onInputBill,
  handlePayment
}) {
  const [yourExpense, setYourExpense] = useState(0);
  const [yourFriendExpense, setYourFriendExpense] = useState(0);

  function handleSetYourExpense(e) {
    if (yourExpense <= 0 && e < 0) return;
    Number(e) > Number(totalBill)
      ? setYourExpense(totalBill)
      : setYourExpense(e.replace(/^0+/, ""));
  }
  function handleSetYourFriendExpense(e) {
    if (yourFriendExpense <= 0 && e < 0) return;
    Number(e) > Number(totalBill)
      ? setYourFriendExpense(totalBill)
      : setYourFriendExpense(e.replace(/^0+/, ""));
  }
  return (
    <form className="actionsContainer hidden" id="actionContainer" onSubmit={e=>handlePayment(e)}>
      <h1>SPLIT A BILL WITH {currUser}</h1>
      <div className="inputGrid">
        <h2>Total bill</h2>
        <input
          type="number"
          value={totalBill}
          min={0}
          onChange={(e) => onInputBill(e.target.value)}
        />
        <span >$</span>
      </div>

      <div className="inputGrid" id='yourExpense'>
        <h2>Your expense</h2>
        <input
          type="number"
          value={paying === 0 ? totalBill - yourFriendExpense : yourExpense}
          onChange={(e) => handleSetYourExpense(e.target.value)}
        />
        <span >$</span>
      </div>

      <div className="inputGrid"><h2>{currUser} expense</h2>
        <input
          type="number"
          value={paying !== 0 ? totalBill - yourExpense : yourFriendExpense}
          onChange={(e) => handleSetYourFriendExpense(e.target.value)}
        />
        <span >$</span>
      </div>

      <div className="inputGrid_select">
        <h2>Who is paying the bill</h2>
        <select value={paying} onChange={(e) => onPaying(e.target.value)}>
          <option value={0}>You</option>
          <option value={1}>{currUser}</option>
        </select>
      </div> 
      <Button  />
    </form>
  );
}
