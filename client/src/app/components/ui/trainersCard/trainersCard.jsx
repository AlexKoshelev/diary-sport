import React from "react";
import PropTypes from "prop-types";
import SelectField from "../../common/form/selectField/selectField";
import TextField from "../../common/form/textField/textField";

const TrainersCard = ({
  clientsList,
  onChange,
  handleChangeCardio,
  workoutNumber,
  dateToday,
  client,
}) => {
  console.log(client);

  return (
    <div className="trainers__card">
      <div className="trainers__card-selector">
        <SelectField
          defaultOption="Выберите клиента"
          value={clientsList.value}
          onChange={(target) => onChange(target.value)}
          options={clientsList}
          name={"name"}
          key={clientsList.value}
        />
      </div>
      <TextField
        label={"Кардио:"}
        className="clients__info"
        inputClassName="select__field trainerCard"
        name="name"
        onChange={(target) => handleChangeCardio(target.value)}
      />
      <div className="trainers__card-info">
        <div className="info__worknum">
          Тренеровка №
          {workoutNumber || workoutNumber === 0 ? (
            <span>
              {client === "Выберите клиента" ? (
                <div className="info__worknum-top">выберите клиента</div>
              ) : (
                workoutNumber + 1
              )}
            </span>
          ) : (
            <span>
              :<div className="info__worknum-top">выберите клиента</div>
            </span>
          )}
        </div>
      </div>
      <div className="trainers__card-info">
        <div className="info__date">Дата: {dateToday}г.</div>
      </div>
    </div>
  );
};
TrainersCard.propTypes = {
  clientsList: PropTypes.array,
  onChange: PropTypes.func,
  handleChangeCardio: PropTypes.func,
  workoutNumber: PropTypes.number,
  dateToday: PropTypes.string,
};
export default TrainersCard;
