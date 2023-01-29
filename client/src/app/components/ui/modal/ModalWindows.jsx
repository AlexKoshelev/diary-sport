import React from "react";
import { Button, Modal } from "antd";
import { ReactComponent as AddLogo } from "../../../assets/svg/plus.svg";
import PropTypes from "prop-types";
import TextField from "../../common/form/textField/textField";

const ModalWindows = ({
  exercise,
  handleSubmit,
  onChange,
  approachInput,
  setModalId,
  setModalVisible,
  isModalVisible,
}) => {
  const showModal = () => {
    setModalId(exercise.id);
    setModalVisible(true);
  };
  const handleOk = () => {
    setModalVisible(false);
    setModalId("");
  };
  const handleCancel = () => {
    setModalVisible(false);
    setModalId("");
  };

  return (
    <div className="modalMindows__container">
      <div className="trainingRow__container-approach">
        {exercise.approach
          ? exercise.approach.map((ap, index) => (
              <div key={index} className="approach__cell">
                <div className="approach__cell-weight">{ap.weight}</div>
                <div className="approach__cell-repeat">{ap.repeat}</div>
              </div>
            ))
          : null}
      </div>
      <div className="trainingRow__container-modal">
        {<AddLogo onClick={showModal} className="modalBtn" />}
        <Modal
          className="modalWindows"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              onClick={handleOk}
              form="myForm"
              key="submit"
              htmlType="submit"
            >
              Добавить подход
            </Button>,
          ]}
        >
          <form id="myForm" key={exercise.id} onSubmit={handleSubmit}>
            <div className="modalWindows__formContainer">
              <TextField
                label=""
                name={"weight"}
                inputClassName="trainingInfo-textField"
                className="trainingInfo-textField1"
                value={approachInput.weight}
                onChange={onChange}
                placeholder="Вес"
              />
              <TextField
                label=""
                name={"repeat"}
                inputClassName="trainingInfo-textField"
                className="trainingInfo-textField1"
                value={approachInput.repeat}
                onChange={onChange}
                placeholder="Повторения"
              />
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};
ModalWindows.propTypes = {
  exercise: PropTypes.array,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
  approachInput: PropTypes.object,
  setModalId: PropTypes.func,
  setModalVisible: PropTypes.func,
  isModalVisible: PropTypes.bool,
};
export default ModalWindows;
