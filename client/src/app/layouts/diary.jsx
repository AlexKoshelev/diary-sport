import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import PreviewDiaryPage from "../components/page/diary/previewDiaryPage";
import { getCurrentTrainerData } from "../store/trainers";

const Diary = () => {
  const currentTrainer = useSelector(getCurrentTrainerData());

  return <>{currentTrainer ? <Outlet /> : <PreviewDiaryPage />}</>;
};
export default Diary;
