import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
const CalendarGrid = ({ startDay }) => {
  /*   const totalDays = 42; */
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  const isCurrentDay = (day) => moment().isSame(day, "day");
  console.log(daysArray);

  return (
    <div className="calendarGrid__wrapper">
      {daysArray.map((date, i) => (
        <div
          className={`calendarCell ${
            date.day() === 6 || date.day() === 0 ? " isWeekend" : ""
          }`}
          key={i}
          isWeekend={date.day() === 6 || date.day() === 0}
        >
          <div className="calendarCell-row">
            <div className="calendarCell-day">
              {isCurrentDay(date) ? (
                <div className="calendarCell-day-currentDay">
                  {date.format("D")}
                </div>
              ) : (
                <div>{date.format("D")}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
CalendarGrid.propTypes = {
  startDay: PropTypes.string.isRequired,
};
export default CalendarGrid;
