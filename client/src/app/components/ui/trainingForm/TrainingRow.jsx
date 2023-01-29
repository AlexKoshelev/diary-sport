import React from "react";
import { ReactComponent as RemoveLogo } from "../../../assets/svg/noteremove.svg";
import PropTypes from "prop-types";

const TrainingRow = ({ exercise, remove }) => {
  const exerciseId = exercise.id;

  return (
    <div className="exercises__container-exercise">
      <div className="exercise-title">{exercise.exercise}</div>
      <div
        className="exercise-logo"
        onClick={() => {
          remove(exerciseId);
        }}
      >
        <RemoveLogo />
      </div>
    </div>
  );
};
TrainingRow.propTypes = { exercise: PropTypes.object, remove: PropTypes.func };
export default TrainingRow;
