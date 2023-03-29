import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as CheckMark } from "../../../assets/svg/checkMark.svg";
const AboutCard = ({ titleIcon, title, list, type, badge }) => {
  return (
    <>
      {type === 2 ? (
        <div className="aboutCard__type2">
          <div className="aboutCard__type2-badge">{badge}</div>
          <h1 className="aboutCard__type2-title">{title}</h1>
          {list.map((e) => (
            <div key={e} className="aboutCard__type2-list">
              {e}
            </div>
          ))}
        </div>
      ) : (
        <div className="aboutCard">
          <div className="aboutCard-header">
            <h1 className="aboutCard-title">{title}</h1>
            <div className="aboutCard-icon">{titleIcon}</div>
          </div>
          <div className="aboutCard-list">
            {list.map((e) => (
              <div className="flex-container list-container" key={e}>
                <span className="aboutCard-list-icon ">
                  <CheckMark className="aboutCard-list-icon-icon " />
                </span>
                <span className="aboutCard-list-text">{e}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
AboutCard.defaultProps = {
  type: 2,
};
AboutCard.propTypes = {
  titleIcon: PropTypes.node,
  title: PropTypes.string,
  badge: PropTypes.string,
  type: PropTypes.number,
  list: PropTypes.array,
};
export default AboutCard;
