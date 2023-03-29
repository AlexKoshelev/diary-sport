import React from "react";
import Work4 from "../../../assets/img/workouts/work4.JPG";
import Work5 from "../../../assets/img/workouts/work5.png";
import Work6 from "../../../assets/img/workouts/work6.png";
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import { ReactComponent as BaluSport } from "../../../assets/svg/baluSport.svg";
import { ReactComponent as Workout } from "../../../assets/svg/workouts/workout.svg";
import { ReactComponent as Nutrition } from "../../../assets/svg/workouts/nutrition.svg";
import { ReactComponent as Active } from "../../../assets/svg/workouts/active.svg";
import { ReactComponent as Message } from "../../../assets/svg/workouts/message.svg";
import AboutCard from "../../common/aboutCard/AboutCard";
const Workouts = () => {
  const firstAboutCard = [
    "Тренировки доступны в любое время",
    "Подходит для любого уровня подготовки",
    "Детальный разбор упражнений. Остались вопросы, можно посмотреть сначала или задать вопрос мне!",
    "Работай в комфортном темпе, база - более 100+ тренировок!",
  ];
  const secondAboutCard = [
    "Рекомендации по питанию",
    "Никаких ограничений",
    "Максимальный комфорт и любовь к себе и своему телу",
    "Основы психологии РПП",
  ];
  const thirdAboutCard = [
    "Силовые тренировки",
    "Расстяжка",
    "Элементы йоги",
    "Комплексный подход - получи результат и максимальную пользу для здоровья",
  ];
  const fourthAboutCard = ["Доступ к чату", "Рекомендации"];
  const firstCardType2 = [
    "Особое внимание обратите на привычки питания и контакт с телом — чувствуете ли переедание, быстро ли устаёте, какой уровень подвижности.",
  ];
  const secondCardType2 = [
    "Особое внимание обратите на привычки питания и контакт с телом — чувствуете ли переедание, быстро ли устаёте, какой уровень подвижности.",
  ];
  const thirdCardType2 = [
    "Особое внимание обратите на привычки питания и контакт с телом — чувствуете ли переедание, быстро ли устаёте, какой уровень подвижности.",
  ];
  const fourthCardType2 = [
    "Особое внимание обратите на привычки питания и контакт с телом — чувствуете ли переедание, быстро ли устаёте, какой уровень подвижности.",
  ];
  return (
    <>
      <main className="workouts">
        <div className="_container">
          <div className="workouts__block">
            <div className="workouts__block-logo">
              <Logo className="workouts__block-logo-icon" />{" "}
            </div>
            <div className="workouts__block-bage">
              Алёна Балу <br />
              ФИТНЕС-ТРЕНЕР
            </div>
          </div>
        </div>
        <div className="workouts__image _ibg">
          <img src={Work4} alt="картинка тренируется" />
        </div>
      </main>
      <section className="workouts__phones">
        <div className="workouts__phones-image">
          <img width={"350px"} src={Work5} alt="картинка тренируется" />
        </div>
        <div className="workouts__phones-laptop">
          <img width={"150px"} src={Work6} alt="картинка тренируется" />
        </div>
        <h1>Построй тело своей мечты в онлайне</h1>
      </section>
      <div className="workouts__info">
        <article className="workouts__info-lable">
          <div className="workouts__info-lable-logo">
            <BaluSport
              className="workouts__info-lable-logo-icon"
              fill="#B39365"
            />
          </div>
          <div className="workouts__info-lable-text">ЭТО...</div>
        </article>
        <section className="workouts__about">
          <AboutCard
            list={firstAboutCard}
            titleIcon={<Workout />}
            title="Новая тренировка три раза в неделю"
            type={1}
          />
          <AboutCard
            list={secondAboutCard}
            titleIcon={<Nutrition />}
            title="Работа с пищевым поведением"
            type={1}
          />
          <AboutCard
            list={thirdAboutCard}
            titleIcon={<Active />}
            title="Разные виды активности"
            type={1}
          />
          <AboutCard
            list={fourthAboutCard}
            titleIcon={<Message />}
            title="Обратная связь"
            type={1}
          />
        </section>
        <section className="workouts__for">
          <div className="workouts__for-container">
            <h1 className="workouts__for-container-header">
              Кому подойдут тренировки со мной?
            </h1>
            <div className="workouts__for-container-cards">
              <AboutCard
                list={firstCardType2}
                title="КТО НИ РАЗУ СИСТЕМНО НЕ ЗАНИМАЛСЯ СВОИМ ТЕЛОМ"
                type={2}
                badge="Новичкам"
              />
              <AboutCard
                list={secondCardType2}
                title="ХОДИТЕ КАКОЕ-ТО ВРЕМЯ В ЗАЛ, НО НЕТ РЕЗУЛЬТАТА"
                type={2}
                badge="Начинающим"
              />
              <AboutCard
                list={thirdCardType2}
                title="ИМЕЕТЕ БОЛЬШОЙ ОПЫТ, НО ПРОГРЕСС ОСТАНОВИЛСЯ"
                type={2}
                badge="Продвинутым"
              />
              <AboutCard
                list={fourthCardType2}
                title="ТРЕНЕРУЕТЕ ЛЮДЕЙ, НО ХОТИТЕ ПОВЫСИТЬ СВОЙ УРОВЕНЬ"
                type={2}
                badge="Мастерам"
              />
            </div>
          </div>
        </section>
        <section className="workouts__rate-color">
          <div className="workouts__rate">
            <h1 className="workouts__rate-title">ВЫБЕРИ СВОЙ ТАРИФ</h1>

            <div className="workouts__rate-cards">
              <div className="workouts__rate-cards-card">
                <div className="workouts__rate-cards-card-btn">
                  <h1>САМОСТОЯТЕЛЬНЫЙ</h1>
                  <u>стоимость</u>
                  <div>1600 руб.</div>
                </div>
                <div className="workouts__rate-cards-card-text">
                  Вы занимаетесь по полнометражным видео тренировком в любое
                  удобное для вас время + рекомендации по питанию
                </div>
              </div>
              <div className="workouts__rate-cards-card">
                <div className="workouts__rate-cards-card-btn">
                  <h1>С куратором</h1>
                </div>
                <div className="workouts__rate-cards-card-text">
                  Вы занимаетесь по полнометражным видео тренировком в любое
                  удобное для вас время + рекомендации по питанию +
                  индивидуальный расчет БЖУ + чат поддержка
                </div>
              </div>
              <div className="workouts__rate-cards-card">
                <div className="workouts__rate-cards-card-btn">
                  <h1>С куратором VIP</h1>
                </div>
                <div className="workouts__rate-cards-card-text">
                  Пакет с куратором +3 персональных занятия со мной для
                  постановки правильной техники
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Workouts;
