import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../../../assets/svg/baluSport.svg";
const TitleLogo = ({ title }) => {
  return (
    <div>
      <div className="titleLogo__container">
        <div className="titleLogo__container-title">{title}</div>
        <div className="titleLogo__container-logo">
          <Logo className="logo" />
        </div>
      </div>
    </div>
  );
};
TitleLogo.propTypes = {
  title: PropTypes.string,
};
export default TitleLogo;
