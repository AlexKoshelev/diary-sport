import React from "react";
import ImageSlider from "../../common/ImageSlider/ImageSlider";
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
import TitleLogo from "../../common/TitleLogo/TitleLogo";
const ReviewsPage = () => {
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
    <div className="_container">
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
  );
};
export default ReviewsPage;
