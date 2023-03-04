import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentTrainerData } from "../../../store/trainers";
import { ReactComponent as Burger } from "../../../assets/svg/menu.svg";
import { ReactComponent as Exit } from "../../../assets/svg/exitMenu.svg";
import { ReactComponent as MenuLogo } from "../../../assets/svg/baluSportMenu.svg";
import { ReactComponent as Butterfly } from "../../../assets/svg/butterfly.svg";
import SocialMedia from "../../common/socialMedia/socialMedia";
const NavBar = () => {
  const currentTrainer = useSelector(getCurrentTrainerData());
  const [nav, setNav] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header__navbar _container">
          <SocialMedia
            instLink={"_balushaa"}
            telegramLink={"balushaaaa"}
            whatsLink={"79874914280"}
            className={"header__socialMedia"}
          />
          <MenuLogo className="header__logo" width="140px" height="40px" />
          <menu className={nav ? "header__menu active" : "header__menu"}>
            <Butterfly className="butterfly" />
            <ul>
              <li onClick={() => setNav(!nav)}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "header__item-active" : "header__item"
                  }
                  to="/diary"
                >
                  Дневник
                </NavLink>
              </li>

              <li onClick={() => setNav(!nav)}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "header__item-active" : "header__item"
                  }
                  to="/rewiews"
                >
                  Отзывы
                </NavLink>
              </li>
              <li onClick={() => setNav(!nav)}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "header__item-active" : "header__item"
                  }
                  to="/nutrition"
                >
                  Питание
                </NavLink>
              </li>
              <li onClick={() => setNav(!nav)}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "header__item-active" : "header__item"
                  }
                  to="/"
                >
                  Тренировки
                </NavLink>
              </li>

              <li onClick={() => setNav(!nav)}>
                {currentTrainer ? (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "header__item-active" : "header__item"
                    }
                    to="/trainerPage"
                  >
                    {currentTrainer.name}
                  </NavLink>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "header__item-active" : "header__item"
                    }
                    to="/login/signin"
                  >
                    Войти
                  </NavLink>
                )}
              </li>
              <SocialMedia
                instLink={"_balushaa"}
                telegramLink={"balushaaaa"}
                whatsLink={"79874914280"}
                className={"header__menuSocialMedia"}
              />
            </ul>
          </menu>
          <div onClick={() => setNav(!nav)} className="burger">
            {nav ? (
              <Exit width="28px" height="28px" />
            ) : (
              <Burger width="45px" height="30px" />
            )}
          </div>
        </div>
      </header>
    </>
  );
};
export default NavBar;
