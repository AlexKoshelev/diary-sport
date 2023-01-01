import React from "react";
import "./navBar.scss";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentTrainerData } from "../../../store/trainers";
import SocialMedia from "../socialMedia";
const NavBar = () => {
  const currentTrainer = useSelector(getCurrentTrainerData());

  return (
    <>
      <header className="header">
        <div className="header__navbar _container">
          <div className="header__icons">
            <SocialMedia
              instLink={"_balushaa"}
              telegramLink={"balushaaaa"}
              whatsLink={"79874914280"}
            />
          </div>
          <menu className="header__menu">
            <div className="header__item headerButton">
              <span className="header__item-button">
                <NavLink to="/diary" className="href">
                  Дневник
                </NavLink>
              </span>
            </div>
            <div className="header__item headerButton">
              <NavLink to="/rewiews" className="href">
                Отзывы
              </NavLink>
            </div>
            <div className="header__item headerButton">
              <NavLink to="/nutrition" className="href">
                Питание
              </NavLink>
            </div>
            <div className="header__item headerButton">
              <NavLink to="/workouts" className="href">
                Тренировки
              </NavLink>
            </div>
            <div className="header__item headerButton">
              <NavLink to="/" className="href">
                ABOUT
              </NavLink>
            </div>
            <div className="header__item headerButton">
              {currentTrainer && currentTrainer !== "" ? (
                <NavLink to="/trainerPage" className="href">
                  {currentTrainer.name}
                </NavLink>
              ) : (
                <NavLink to="/login/signin" className="href">
                  Войти
                </NavLink>
              )}
            </div>
          </menu>
        </div>
      </header>
    </>
  );
};
export default NavBar;
