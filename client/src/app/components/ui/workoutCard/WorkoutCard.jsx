import React from "react";
import PropTypes from "prop-types";
const WorkoutCard = ({ workout }) => {
  console.log(workout);

  return (
    <>
      <div className="workoutCard__container">
        <div className="workoutCard__container-date">
          Дата тренировки: {workout.date}
        </div>
        <div className="workoutCard__container-date">
          Кардио: {workout.cardio}
        </div>
        <div className="workoutCard__container-exercise">
          Упражнения:{" "}
          <ol>
            {workout.exercises.map((e) => (
              <li>{e.exercise}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};
WorkoutCard.propTypes = {
  workout: PropTypes.object,
};
export default WorkoutCard;
