import React from "react";
import PropTypes from "prop-types";
import TextField from "../../common/form/textField/textField";
import { ReactComponent as AddBtn } from "../../../assets/svg/addsquare.svg";
import { useState } from "react";
import TrainingRow from "./TrainingRow";
import ModalWindows from "../../common/modal/ModalWindows";
import { useEffect } from "react";

const TrainingForm = ({
  addWorkout,
  currentClientId,
  cardioTime,
  workoutNumber,
  dateToday,
  addExercise,
  exercises,
  remove,
  setExercise,
}) => {
  const [exerciseInput, setExerciseInput] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const handleChange = (e) => {
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

  const [modalId, setModalId] = useState("");

  const [approachInput, setApproachInput] = useState({
    weight: "",
    repeat: "",
    exerciseId: modalId,
  });
  useEffect(() => {
    const exerciseId = modalId;
    setApproachInput((prevState) => ({ ...prevState, exerciseId }));
  }, [modalId]);
  console.log(approachInput);
  const handleChangeModal = (e) => {
    setApproachInput((prevState) => ({ ...prevState, [e.name]: e.value }));
  };
  const handleSubmitModal = (e) => {
    e.preventDefault();
    setExercise(
      exercises.map((exercise) => {
        if (exercise.id === approachInput.exerciseId) {
          console.log(exercise.id);
          console.log(modalId);
          setModalId("");
          const newApproach = [...exercise.approach, approachInput];
          return {
            ...exercise,
            approach: newApproach,
          };
        } else {
          return exercise;
        }
      })
    );

    setApproachInput({ weight: "", repeat: "", exerciseId: "" });
  };
  console.log(currentClientId);

  return (
    <>
      <div className="trainingInfo__container">
        {!currentClientId ? (
          "Выберите клиента"
        ) : (
          <div>
            <div className="trainingInfo__container-form">
              <form onSubmit={handleSubmit}>
                <TextField
                  label=""
                  inputClassName="trainingInfo-textField"
                  className="trainingInfo-textField1"
                  value={exerciseInput}
                  onKeyDown={handleKeyPress}
                  onChange={handleChange}
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
                    <div
                      key={`row${exercise.id}`}
                      className="trainingRow__container"
                    >
                      <div className="exercises__container">
                        <TrainingRow exercise={exercise} remove={remove} />
                      </div>
                      <ModalWindows
                        isModalVisible={isModalVisible}
                        setModalVisible={setModalVisible}
                        setModalId={setModalId}
                        exercises={exercises}
                        exercise={exercise}
                        setExercise={setExercise}
                        exerciseId={exercise.id}
                        handleSubmit={handleSubmitModal}
                        onChange={handleChangeModal}
                        approachInput={approachInput}
                      />
                    </div>
                  );
                })
              : null}
          </div>
        )}
        {exercises ? (
          <button
            className="trainingInfo__container-button"
            onClick={addWorkout}
          >
            Сохранить тренировку
          </button>
        ) : null}
      </div>
    </>
  );
};
TrainingForm.propTypes = {
  addWorkout: PropTypes.func,
  currentClientId: PropTypes.string,
  cardioTime: PropTypes.string,
  workoutNumber: PropTypes.string,
  dateToday: PropTypes.number,
  addExercise: PropTypes.func,
  exercises: PropTypes.node,
  setExercise: PropTypes.func,
  remove: PropTypes.func,
};
export default TrainingForm;
