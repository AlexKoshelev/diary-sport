import React from "react";
const Monitor = ({ today, todayHandler, nextHandler, prevHandler }) => {
  return (
    <div className="monitor__wrapper">
      <div className="monitor__wrapper-date">
        <span>{today.locale("ru").format("MMMM")}</span>
        <span>{today.format("yyyy")}</span>
      </div>
      <div className="monitor__wrapper-control">
        <button onClick={() => prevHandler()}>&lt;</button>
        <button onClick={() => todayHandler()}>Сегодня</button>
        <button onClick={() => nextHandler()}>&gt;</button>
      </div>
    </div>
  );
};
export default Monitor;
