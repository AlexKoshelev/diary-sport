import React from "react";
import Nut1 from "../../../assets/img/nutrition/nut1.png";
import Nut2 from "../../../assets/img/nutrition/nut2.png";
import TitleLogo from "../../common/TitleLogo/TitleLogo";
const Nutrition = () => {
  return (
    <div className="_container">
      <div className="nutrition__container">
        <div>
          <div className="nutrition__container-logo">
            <TitleLogo title={"Питание"} />
          </div>
          <div className="title__container">
            <h2>
              Правильное питание это 80% твоего успеха в работе над фигурой
            </h2>
            <h1>Научитесь готовить вкусно!</h1>
            <h2>
              Красивое тело без изнурительных диет, позволь ни в чем себе не
              отказывать{" "}
            </h2>
            <h3>Записывайся на тренировки и вступай в наши ряды</h3>
          </div>
        </div>
        <div className="image__container">
          <div className="image__container-image">
            <img className="about_img" src={Nut1} alt="картинка тренируется" />
          </div>
          <div className="image__container-image">
            <img className="about_img" src={Nut2} alt="картинка тренируется" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nutrition;
