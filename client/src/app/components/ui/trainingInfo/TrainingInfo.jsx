import React from "react";
import PropTypes from "prop-types";
import TextField from "../../common/form/textField/textField";
import { ReactComponent as AddBtn } from "../../../assets/svg/addsquare.svg";
import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
const TrainingInfo = ({
  currentClientId,
  cardioTime,
  workoutNumber,
  dateToday,
}) => {
  const { handleChange, data, errors, validateBySubmit, setErrors } = useForm({
    exercise: "",
  });
  /*  const [data, setData] = useState({ exercise: "" }); */
  console.log(data);

  return (
    <div className="trainingInfo__container">
      <TextField
        label=""
        name="exercise"
        inputClassName="trainingInfo-textField"
        className="trainingInfo-textField1"
        value={data.exercise}
        onChange={handleChange}
        /*   error={errors.email} */
        placeholder="Введите название упражнения..."
      />
      <button className="trainingInfo-addBtn">
        <AddBtn />
      </button>
    </div>
  );
};
TrainingInfo.propTypes = {
  currentClientId: PropTypes.string,
  cardioTime: PropTypes.string,
  workoutNumber: PropTypes.number,
  dateToday: PropTypes.string,
};
export default TrainingInfo;
