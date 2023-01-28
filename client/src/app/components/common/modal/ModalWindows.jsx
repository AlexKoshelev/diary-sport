import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ReactComponent as AddLogo } from "../../../assets/svg/plus.svg";
import PropTypes from "prop-types";
import TextField from "../form/textField/textField";
const ModalWindows = ({ addApproach, approach, remove, exerciseId }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };
  const handleOk = () => {
    setModalVisible(false);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };

  const [approachInput, setApproachInput] = useState({
    weight: "",
    repeat: "",
    exerciseId,
  });
  const handleChange = (e) => {
    console.log(e);
    setApproachInput((prevState) => ({ ...prevState, [e.name]: e.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(approachInput);
    addApproach(approachInput);
    setApproachInput({ weight: "", repeat: "" });
    handleOk();
  };
  return (
    <>
      {<AddLogo onClick={showModal} className="modalBtn" />}
      <Modal
        className="modalWindows"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button form="myForm" key="submit" htmlType="submit">
            Добавить подход
          </Button>,
        ]}
      >
        <form id="myForm" onSubmit={handleSubmit}>
          <div className="modalWindows__formContainer">
            <TextField
              label=""
              name={"weight"}
              inputClassName="trainingInfo-textField"
              className="trainingInfo-textField1"
              value={approachInput.weight}
              onChange={handleChange}
              placeholder="Вес"
            />
            <TextField
              label=""
              name={"repeat"}
              inputClassName="trainingInfo-textField"
              className="trainingInfo-textField1"
              value={approachInput.repeat}
              onChange={handleChange}
              placeholder="Повторения"
            />
          </div>
        </form>
      </Modal>
    </>
  );
};
export default ModalWindows;
