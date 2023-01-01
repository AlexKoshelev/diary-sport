import React from "react";
import PropTypes from "prop-types";

import TextField from "./form/textField/textField";
const ClientEditForm = ({
  handleSubmit,
  clientData,
  handleChange,
  btnTitle,
  onClick,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label={"Имя"}
          className="clients__info"
          inputClassName="form-control"
          name="name"
          value={clientData.name}
          onChange={handleChange}
          placeholder="Имя"
        />
        <TextField
          inputClassName="form-control"
          label={"Номер телефона"}
          className="clients__info"
          name="phone"
          value={clientData.phone}
          onChange={handleChange}
          placeholder="Номер телефона"
        />
        <TextField
          inputClassName="form-control"
          label={"Возраст"}
          className="clients__info"
          name="age"
          value={clientData.age}
          onChange={handleChange}
          placeholder="Возраст"
        />
        <TextField
          inputClassName="form-control"
          label={"Рост"}
          className="clients__info"
          name="growth"
          value={clientData.growth}
          onChange={handleChange}
          placeholder="Рост"
        />
        <TextField
          inputClassName="form-control"
          label={"Вес"}
          className="clients__info"
          name="weight"
          value={clientData.weight}
          onChange={handleChange}
          placeholder="Вес"
        />
        <TextField
          inputClassName="form-control"
          label={"Обхват талии"}
          className="clients__info"
          name="waist"
          value={clientData.waist}
          onChange={handleChange}
          placeholder="Обхват талии"
        />
        <TextField
          inputClassName="form-control"
          label={"Обхват груди"}
          className="clients__info"
          name="bust"
          value={clientData.bust}
          onChange={handleChange}
          placeholder="Обхват груди"
        />
        <TextField
          inputClassName="form-control"
          label={"Обхват бёдер"}
          className="clients__info"
          name="hips"
          value={clientData.hips}
          onChange={handleChange}
          placeholder="Обхват бёдер"
        />
        <TextField
          inputClassName="form-control"
          label={"Обхват бедра"}
          className="clients__info"
          name="leg"
          value={clientData.leg}
          onChange={handleChange}
          placeholder="Обхват бедра"
        />
        <TextField
          inputClassName="form-control"
          label={"Обхват руки"}
          className="clients__info"
          name="arm"
          value={clientData.arm}
          onChange={handleChange}
          placeholder="Обхват руки"
        />
        <button className="trainerPage_addbtn" type="submit" onClick={onClick}>
          {btnTitle}
        </button>
      </form>
    </>
  );
};
ClientEditForm.propTypes = {
  handleSubmit: PropTypes.func,
  clientData: PropTypes.object,
  handleChange: PropTypes.func,
  btnTitle: PropTypes.string,
  onClick: PropTypes.func,
};
export default ClientEditForm;
