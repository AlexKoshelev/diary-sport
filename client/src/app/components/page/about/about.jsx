import React from "react";
import Train1 from "../../../assets/img/trainer/train1.JPG";
/* Приветствую вас! Меня зовут Алена Балу, я фитнес тренер с многолетним стажем. Я являюсь абсолютной чемпионкой по фитнес бикини Республики Башкортостан среди юниорок, двукратной вице чемпионкой среди женщин и участницей многих соревнований в Москве и МО. Опыт личных тренировок в зале более 10 лет. Сейчас я помогаю другим получить желаемую форму.Моя работа построена только на доказанных наукой методиках. В своей работе я использую знания о биомеханике, диетологии, нутрицологии и психологии. Чтобы понять женщину и ее желание быть красивой, нужно самой родиться женщиной и пройти разные этапы трансформации. Я много раз худела, толстела, сушилась, набирала массу, пробовала различные типы питания и пришла к выводу: чтобы быть красивой и здоровой, нужно заботиться о себе каждый день и жить с любовью к себе. Если вы полюбите себя, свою душу и тело, тогда они неприменно ответят вам взаимностью! Работая со мной вы научитесь слышать свое тело, полюбите его и почувствуете гармонию внутри себя. */
const About = () => {
  return (
    <div className="_container">
      <div className="about__container">
        <div className="about__container-text">
          <p>
            Приветствую вас! Меня зовут Алена Балу, я фитнес тренер с
            многолетним стажем. Я являюсь абсолютной чемпионкой по фитнес бикини
            Республики Башкортостан среди юниорок, двукратной вице чемпионкой
            среди женщин и участницей многих соревнований в Москве и МО. Опыт
            личных тренировок в зале более 10 лет.
          </p>
        </div>
        <div className="about__container-image">
          <img
            className="about__container-image image"
            src={Train1}
            alt="картинка тренируется"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
