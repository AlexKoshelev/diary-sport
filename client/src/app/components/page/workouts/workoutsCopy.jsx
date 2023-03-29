import React from "react";
import Work1 from "../../../assets/img/workouts/work1.jpeg";
import Work2 from "../../../assets/img/workouts/work2.JPG";
import Work3 from "../../../assets/img/workouts/work3.JPG";
import { ReactComponent as CheckMark } from "../../../assets/svg/checkMark.svg";
import ImageSlider from "../../common/ImageSlider/ImageSlider";
import TitleLogo from "../../common/TitleLogo/TitleLogo";
import Item1 from "../../../assets/img/rewies/rewImg4.jfif";
import Item2 from "../../../assets/img/rewies/rewImg6.jfif";
import Item3 from "../../../assets/img/rewies/rewImg5.jfif";
import Item4 from "../../../assets/img/rewies/rewImg7.jfif";
import Item5 from "../../../assets/img/rewies/rewImg2.jfif";
import Item6 from "../../../assets/img/rewies/rewImg1.jfif";
import Item7 from "../../../assets/img/rewies/rewImg3.jfif";
import Item8 from "../../../assets/img/rewies/rew.jpg";
import Item9 from "../../../assets/img/rewies/rew1.jfif";
import Item11 from "../../../assets/img/rewies/rew3.jfif";
import Item12 from "../../../assets/img/rewies/rew4.jfif";
import Item13 from "../../../assets/img/rewies/rew5.jpg";
import Item14 from "../../../assets/img/rewies/rew6.jpg";
import Item15 from "../../../assets/img/rewies/rew7.jpg";
import Item16 from "../../../assets/img/rewies/rew8.jpg";
import Item17 from "../../../assets/img/rewies/rew9.jpg";
import Item18 from "../../../assets/img/rewies/rew10.jpg";
const Workouts = () => {
  const rewImg = [Item1, Item2, Item3, Item4, Item5, Item6, Item7];
  const rew = [
    Item8,
    Item9,
    Item11,
    Item12,
    Item13,
    Item14,
    Item15,
    Item16,
    Item17,
    Item18,
  ];
  return (
    <>
      <div className="_container">
        <div className="mainWorkouts__container">
          <div className="mainWorkouts__container-imageContainer">
            <img
              className="mainWorkouts__container-image"
              src={Work1}
              alt="картинка тренируется"
            />
            <div className="mainWorkouts__container-content">
              <p>
                У вас нет возможности ходить в спортивный зал? Онлайн тренировки
                для занятия дома!
              </p>
              <div className="content">
                <p className="content-m">
                  Это удобно и просто! И сейчас я расскажу, как проходят
                  тренировки со мной
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="workouts__container-block">
            <p>Мои тренировки онлайн подойдут тем, кто хочет:</p>
            <ul>
              <div className="block-list">
                <li>
                  <CheckMark
                    height="35px"
                    width="35px"
                    className="workout-icon"
                  />
                  <span> почувствовать свое тело</span>
                </li>
              </div>
              <li>
                {" "}
                <CheckMark
                  height="35px"
                  width="35px"
                  className="workout-icon"
                />
                <span> проработать все группы мышц</span>
              </li>
              <li>
                {" "}
                <CheckMark
                  height="35px"
                  width="35px"
                  className="workout-icon"
                />
                <span> получать энергию от занятий</span>
              </li>
              <li>
                <CheckMark
                  height="35px"
                  width="35px"
                  className="workout-icon"
                />
                <span> заниматься осознанно</span>
              </li>
              <li>
                <CheckMark
                  height="35px"
                  width="35px"
                  className="workout-icon"
                />
                <span> научиться правильной технике</span>
              </li>
            </ul>
          </div>
          <div className="workouts__container-block">
            <p>Минимум инвентаря!</p>
            <ul>
              <div className="block-list">
                <li>
                  <CheckMark
                    height="35px"
                    width="35px"
                    className="workout-icon"
                  />
                  <span> коврик</span>
                </li>
              </div>
              <li>
                {" "}
                <CheckMark
                  height="35px"
                  width="35px"
                  className="workout-icon"
                />
                <span> 2 гантели от 1.5 до 3 кг или бутылка воды</span>
              </li>
              <li>
                <CheckMark
                  height="35px"
                  width="35px"
                  className="workout-icon"
                />
                <span> фитнес резинка</span>
              </li>
              <li>
                <p>Дополнительно, но необязательно:</p>
              </li>
              <li>
                <CheckMark
                  height="35px"
                  width="35px"
                  className="workout-icon"
                />
                <span> два утяжелителя по 1кг</span>
              </li>
              <li>
                <CheckMark
                  height="35px"
                  width="35px"
                  className="workout-icon"
                />
                <span> ролл для МФР</span>
              </li>
              <li>
                <CheckMark
                  height="35px"
                  width="35px"
                  className="workout-icon"
                />
                <span> мяч для МФР</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="workouts__container-textBlock">
            <h1>НЕ МАРАФОН</h1>
            <p>
              а постоянная работа с телом через разминку, суставную гимнастику,
              силовые и функциональные упражнения, растяжку и расслабление
            </p>
            <p>упражнения, которые я выполняю сама</p>
            <p>
              почувствую свое тело, найди гармонию с ним. <br />
              Физическая и эмоциональная легкость
            </p>
          </div>
          <div className="workouts__container-block">
            <div className="imageWork__container">
              <img
                className="imageWork__container-card"
                src={Work2}
                alt="картинка тренируется"
              />
              <div className="imageWork__container-text1">
                <h1>Что важно?</h1>
                <p>
                  Тренировки <b>В ЗАПИСИ</b>, что дает вам возможность находить
                  время для занятия, когда <b>ВАМ УДОБНО</b>
                </p>
              </div>
              <div className="imageWork__container-text2">
                <h1>100+</h1>
                <p>
                  тренировок уже записано, доступ в <b>ЛЮБОЕ</b> время
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rewiew__container">
          <TitleLogo title={"Ваши отзывы"} />
          <div className="image-slider-container">
            <div className="image-slider__image">
              <ImageSlider slides={rewImg} />
            </div>
            <div className="image-slider__image">
              <ImageSlider slides={rew} />
            </div>
          </div>
        </div>
        <div className="mainWorkouts__container">
          <div className="mainWorkouts__container-imageContainer">
            <img
              className="mainWorkouts__container-image"
              src={Work3}
              alt="картинка тренируется"
            />
            <div className="mainWorkouts__container-content1">
              <p>
                Позволь себе месяц тренировок с тренером за стоимость одной
                персональной тренировки в зале
              </p>
            </div>
            <div className="mainWorkouts__container-content2">
              <p>
                <b> 1500р</b> доступ на 1 месяц
              </p>
              <p>
                <b>2200р</b> доступ на 2 месяца
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Workouts;
