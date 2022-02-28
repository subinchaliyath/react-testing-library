import { useState } from "react";

function SendMoney({ user }) {
  const [balance, setBalance] = useState(5000);
  const [transferAmount, setTransferAmount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setBalance((prev) => prev - transferAmount);
      setTransferAmount(0);
    }, 2000);
  };
  return (
    <>
      <h3>Balance: {balance}</h3>
      <form onSubmit={onSubmit}>
        <br />
        <h4>Send Money to: {user}</h4>
        <label htmlFor="transferAmount">Transfer Amount</label>
        <br />
        <input
          min="0"
          type="number"
          id="transferAmount"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default SendMoney;
