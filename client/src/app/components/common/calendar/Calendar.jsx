import React, { useState } from "react";
import moment from "moment";
import Header from "./header/Header";
import Monitor from "./monitor/Monitor";
import CalendarGrid from "./calendarGrid/CalendarGrid";
const Calendar = () => {
  window.moment = moment;
  moment.updateLocale("ru", { week: { dow: 1 } });
  moment.updateLocale("ru", {
    months: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
  });

  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");
  const prevHandler = () => {
    console.log("prev");
    setToday((prevState) => prevState.clone().subtract(1, "month"));
  };
  const todayHandler = () => {
    console.log("todayHandler");
    setToday(moment());
  };
  const nextHandler = () => {
    console.log("nextHandler");
    setToday((prevState) => prevState.clone().add(1, "month"));
  };

  return (
    <div className="calendar__wrapper">
      <Header />
      <Monitor
        today={today}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
        prevHandler={prevHandler}
      />
      <CalendarGrid startDay={startDay} />
    </div>
  );
};
export default Calendar;
