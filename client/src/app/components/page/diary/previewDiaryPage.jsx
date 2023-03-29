import React from "react";
import Calendar from "../../common/calendar/Calendar";

const PreviewDiaryPage = () => {
  return (
    <div className="_container">
      <div className="text">
        Чтобы получить доступ к дневнику, необходимо войти или
        зарегистрироваться!
      </div>
      <Calendar />
    </div>
  );
};
export default PreviewDiaryPage;
