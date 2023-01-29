import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentTrainerData } from "../../../store/trainers";
import SocialMedia from "../../common/socialMedia/socialMedia";
const NavBar = () => {
  const currentTrainer = useSelector(getCurrentTrainerData());

  return (
    <>
      <header className="header">
        <div className="header__navbar _container">
          <SocialMedia
            instLink={"_balushaa"}
            telegramLink={"balushaaaa"}
            whatsLink={"79874914280"}
          />
          <menu className="header__menu">
            <div className="header__item">
              <span className="header__item-button">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "header__item-active" : ""
                  }
                  to="/diary"
                >
                  Дневник
                </NavLink>
              </span>
            </div>
            <div className="header__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "header__item-active" : ""
                }
                to="/rewiews"
              >
                Отзывы
              </NavLink>
            </div>
            <div className="header__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "header__item-active" : ""
                }
                to="/nutrition"
              >
                Питание
              </NavLink>
            </div>
            <div className="header__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "header__item-active" : ""
                }
                to="/"
              >
                Тренировки
              </NavLink>
            </div>

            <div className="header__item">
              {currentTrainer ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "header__item-active" : ""
                  }
                  to="/trainerPage"
                >
                  {currentTrainer.name}
                </NavLink>
              ) : (
                <NavLink to="/login/signin">Войти</NavLink>
              )}
            </div>
          </menu>
        </div>
      </header>
    </>
  );
};
export default NavBar;
