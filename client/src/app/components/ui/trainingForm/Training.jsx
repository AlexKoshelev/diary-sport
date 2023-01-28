import React, { useState } from "react";
import TrainingForm from "./TrainingForm";
import { nanoid } from "nanoid";
import { useEffect } from "react";
const Training = () => {
  const [exercises, setExercise] = useState([{ exercise: "", approach: {} }]);
  const [approach, setApproach] = useState([]);
  console.log(approach);
  useEffect(() => {
    console.log(approach);
  }, [approach]);
  const addExercise = (exerciseInput) => {
    if (exerciseInput) {
      const newExercise = {
        id: nanoid(),
        exercise: exerciseInput,
        complite: false,
      };
      setExercise([...exercises, newExercise]);
    }
  };

  const removeExercise = (id) => {
    setExercise([...exercises.filter((e) => e.id !== id)]);
  };

  return (
    <div>
      <TrainingForm
        addExercise={addExercise}
        exercises={exercises}
        setExercise={setExercise}
        remove={removeExercise}
        approach={approach}
        setApproach={setApproach}
      />
    </div>
  );
};
export default Training;
