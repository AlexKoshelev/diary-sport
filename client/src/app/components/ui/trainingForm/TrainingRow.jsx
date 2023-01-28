import React, { useState } from "react";
import { ReactComponent as RemoveLogo } from "../../../assets/svg/noteremove.svg";
import { ReactComponent as AddLogo } from "../../../assets/svg/plus.svg";
import PropTypes from "prop-types";
import ModalWindows from "../../common/modal/ModalWindows";
import TextField from "../../common/form/textField/textField";
import { nanoid } from "nanoid";
const TrainingRow = ({
  exercise,
  remove,
  approach,
  setApproach,
  setExercise,
}) => {
  const exerciseId = exercise.id;
  const addApproach = (approachInput, exerciseId) => {
    if (approachInput) {
      console.log("addApp");

      setApproach((approach) => ({ approach: approachInput }));
      const newApproach = {
        id: nanoid(),
        approach: approachInput,
      };
      /*     setExercise([...exercise, exercise:approach:newApproach]);  */
    }
  };

  const removeApproach = (id) => {
    setApproach([...approach.filter((e) => e.id !== id)]);
  };

  return (
    <div className="trainingRow__container">
      <div className="exercises__container">
        <div className="exercises__container-exercise">
          <div className="exercise-title" key={exerciseId}>
            {exercise.exercise}
          </div>
          <div
            className="exercise-logo"
            onClick={() => {
              remove(exerciseId);
            }}
          >
            <RemoveLogo />
          </div>
        </div>
      </div>
      <div className="exercises__container-approach">
        <ModalWindows
          exerciseId={exerciseId}
          addApproach={addApproach}
          approach={approach}
          remove={removeApproach}
        ></ModalWindows>
      </div>
    </div>
  );
};
TrainingRow.propTypes = {};
export default TrainingRow;
