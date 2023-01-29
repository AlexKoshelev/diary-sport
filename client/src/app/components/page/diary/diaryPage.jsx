import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getClientsById } from "../../../store/clients";
import { getCurrentTrainerData } from "../../../store/trainers";
import { getWorkoutsById } from "../../../store/workouts";
import { transformDate } from "../../../utils/transformDate";
import TrainersCard from "../../ui/trainersCard/trainersCard";
import Comments from "../../common/comments/comments";
import { Calendar } from "antd";
import { ReactComponent as Bookmark } from "../../../assets/svg/around.svg";
import ClientCard from "../../ui/clientCard/clientCard";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import Training from "../../ui/trainingForm/Training";
import WorkoutCard from "../../ui/workoutCard/WorkoutCard";
dayjs.locale("ru");
const DiaryPage = () => {
  const currentTrainer = useSelector(getCurrentTrainerData());

  const clients = useSelector(getClientsById(currentTrainer._id));
  const [selectClientId, setSectClientId] = useState("");
  const [cardioTime, setCardioTime] = useState("");
  const [workoutNumber, setWorkoutNumber] = useState(0);
  const dateToday = transformDate(new Date());
  const currentClient =
    clients && clients.find((c) => c._id === selectClientId);

  const currentClientWorkoutsList = useSelector(
    getWorkoutsById(selectClientId)
  );
  console.log(currentClientWorkoutsList);

  let numAllWorkouts =
    currentClientWorkoutsList && currentClientWorkoutsList.length;

  useEffect(() => {
    setWorkoutNumber(numAllWorkouts++);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectClientId]);
  const clientsList = clients
    ? Object.values(clients).map((c) => ({
        label: c.name,
        value: c._id,
      }))
    : {};

  const handleChange = (id) => {
    setSectClientId(id);
  };

  const handleChangeCardio = (value) => {
    setCardioTime(value);
  };
  const [selectedDate, setSelectedDate] = useState("");
  const selectedWorkout = currentClientWorkoutsList.find(
    (w) => w.date === selectedDate
  );
  console.log(selectedWorkout);

  const hahdleSelectDate = (date) => {
    const day = date.$D;
    const month = date.$M + 1;
    const year = date.$y;

    const selectDate = `${day}.${month}.${String(year).substr(2, 2)}`;
    setSelectedDate(selectDate);
  };
  const handleBookmark = (date) => {
    const day = date.$D;

    let month = date.$M + 1;

    const year = date.$y;

    const DATE = `${day}.${month}.${String(year).substr(2, 2)}`;

    if (currentClientWorkoutsList)
      return currentClientWorkoutsList.map((w) =>
        w.date === DATE ? (
          <Bookmark key={DATE} className="calendar-icon" />
        ) : null
      );
  };
  return (
    <>
      {currentTrainer && (
        <div className="_container">
          <div className="diary__layout">
            <div className="table__group">
              <div className="diary__trainer diary-container">
                <div className="diary__trainer-name">{currentTrainer.name}</div>
                <div className="table__container">
                  <TrainersCard
                    clientsList={clientsList}
                    onChange={handleChange}
                    handleChangeCardio={handleChangeCardio}
                    workoutNumber={workoutNumber}
                    dateToday={dateToday}
                    className="select-client"
                    client={selectClientId}
                  />

                  <Training
                    setSectClientId={setSectClientId}
                    currentClientId={selectClientId}
                    cardioTime={cardioTime}
                    workoutNumber={workoutNumber}
                    dateToday={dateToday}
                  />
                </div>
              </div>
              {selectClientId && dateToday && (
                <Comments
                  selectClientId={selectClientId}
                  dateToday={dateToday}
                />
              )}
              {selectedWorkout ? (
                <WorkoutCard workout={selectedWorkout} />
              ) : null}
            </div>
            <div>
              <div key={"cal"} className="calendar__container">
                <Calendar
                  onSelect={(date) => hahdleSelectDate(date)}
                  dateCellRender={(date) => handleBookmark(date)}
                />
              </div>
              <div className="client__container">
                {currentClient ? (
                  <ClientCard client={currentClient} />
                ) : (
                  "Выберите клиента"
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DiaryPage;
