import React from "react";
import PropTypes from "prop-types";
import TextField from "../../common/form/textField/textField";
import { ReactComponent as AddBtn } from "../../../assets/svg/addsquare.svg";
import { useState } from "react";
import TrainingRow from "./TrainingRow";
const TrainingForm = ({
  currentClientId,
  cardioTime,
  workoutNumber,
  dateToday,
  addExercise,
  exercises,
  remove,
  approach,
  setApproach,
  setExercise,
}) => {
  const [exerciseInput, setExerciseInput] = useState("");
  const handleChange = (e) => {
    console.log(e);

    setExerciseInput(e.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addExercise(exerciseInput);
    setExerciseInput("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="trainingInfo__container">
      <div className="trainingInfo__container-form">
        <form onSubmit={handleSubmit}>
          <TextField
            label=""
            inputClassName="trainingInfo-textField"
            className="trainingInfo-textField1"
            value={exerciseInput}
            onKeyDown={handleKeyPress}
            onChange={handleChange}
            /*   error={errors.email} */
            placeholder="Введите название упражнения..."
          />
          <button className="trainingInfo-addBtn">
            <AddBtn />
          </button>
        </form>
      </div>

      {exercises
        ? exercises.map((exercise) => {
            return (
              <TrainingRow
                setExercise={setExercise}
                approach={approach}
                setApproach={setApproach}
                exercise={exercise}
                remove={remove}
              />
            );
          })
        : null}
    </div>
  );
};
TrainingForm.propTypes = {
  currentClientId: PropTypes.string,
  cardioTime: PropTypes.string,
  workoutNumber: PropTypes.number,
  dateToday: PropTypes.string,
};
export default TrainingForm;
