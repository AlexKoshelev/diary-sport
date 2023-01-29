import React, { useState } from "react";
import TrainingForm from "./TrainingForm";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
const Training = ({
  setSectClientId,
  currentClientId,
  cardioTime,
  workoutNumber,
  dateToday,
}) => {
  const [exercises, setExercise] = useState("");
  const [workout, setWorkot] = useState({
    id: currentClientId,
    cardioTime,
    workoutNumber,
    dateToday,
    exercises,
  });
  console.log(workout);
  const addWorkout = () => {
    setWorkot({
      id: currentClientId,
      cardioTime,
      workoutNumber,
      dateToday,
      exercises,
    });
    setSectClientId("");
    setExercise("");
  };
  const addExercise = (exerciseInput) => {
    if (exerciseInput) {
      const newExercise = {
        id: nanoid(),
        exercise: exerciseInput,
        approach: "",
      };
      setExercise([...exercises, newExercise]);
    }
  };

  const removeExercise = (id) => {
    setExercise([...exercises.filter((e) => e.id !== id)]);
  };

  return (
    <>
      <TrainingForm
        currentClientId={currentClientId}
        addExercise={addExercise}
        addWorkout={addWorkout}
        exercises={exercises}
        setExercise={setExercise}
        remove={removeExercise}
      />
    </>
  );
};

Training.propTypes = {
  setSectClientId: PropTypes.string,
  currentClientId: PropTypes.string,
  cardioTime: PropTypes.string,
  workoutNumber: PropTypes.number,
  dateToday: PropTypes.string,
};
export default Training;
