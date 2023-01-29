import React, { useState } from "react";
import TrainingForm from "./TrainingForm";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { createWorkouts } from "../../../store/workouts";
const Training = ({
  setSectClientId,
  currentClientId,
  cardioTime,
  dateToday,
}) => {
  const dispatch = useDispatch();
  const [exercises, setExercise] = useState("");
  const [workout, setWorkout] = useState({
    clientId: currentClientId,
    cardio: "",
    date: "",
    exercises: "",
  });
  console.log(currentClientId);

  const addWorkout = () => {
    setWorkout({
      clientId: currentClientId,
      cardio: cardioTime,
      date: dateToday,
      exercises,
    });
    const newWorkout = { ...workout, _id: nanoid() };
    console.log(newWorkout);

    dispatch(createWorkouts(newWorkout));
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
  dateToday: PropTypes.string,
};
export default Training;
