import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import trainersService from "../services/trainers.services";
import { generateAuthError } from "../utils/generateAuthError";

//createSlice(): принимает объект, содержащий редуктор, название части состояния (state slice), начальное значение состояния, и автоматически генерирует частичный редуктор с соответствующими создателями и типами операции
const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      errors: null,
      auth: { trainerId: localStorageService.getTrainerId() },
      isLoggedIn: true,
      dataLoaded: false,
    }
  : {
      entities: null,
      isLoading: false,
      errors: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: false,
    };

const trainersSlice = createSlice({
  name: "trainers",
  initialState,
  reducers: {
    trainersRequested: (state) => {
      state.isLoading = true;
    },
    trainersReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    trainersRequestFiled: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    },
    trainersCreate(state, action) {
      state.entities.push(action.payload);
    },
    trainersRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (trainer) => trainer._id !== action.payload
      );
    },
    authRequestSucces: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.errors = action.payload;
    },

    trainerLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoaded = false;
    },
    authRequested: (state) => {
      state.errors = null;
    },
    trainerUpdeted: (state, action) => {
      const elementIndex = state.entities.findIndex(
        (t) => t._id === action.payload._id
      );
      state.entities[elementIndex] = action.payload;
    },
  },
});

const { reducer: trainersReducer, actions } = trainersSlice;

const {
  trainersRequested,
  trainersReceved,
  trainersRequestFiled,
  trainersCreate,
  trainerUpdeted,
  authRequestFailed,
  authRequestSucces,
  trainerLoggedOut,
} = actions;

export const updateTrainer = (data) => async (dispatch) => {
  try {
    const content = await trainersService.update(data);

    dispatch(trainerUpdeted(content));
  } catch (error) {
    dispatch(trainersRequestFiled(error.message));
  }
};
const authRequested = createAction("trainers/authRequested");

export const logIn =
  ({ payload }) =>
  async (dispatch) => {
    const { email, password } = payload;

    dispatch(authRequested());
    try {
      const data = await authService.login(email, password);

      localStorageService.setTokens(data);
      dispatch(authRequestSucces({ trainerId: data.trainerId }));

      console.log("вы вошли");
    } catch (error) {
      const message = error.response.data.error.message;
      const code = error.response.data.error.code;

      if (code === 400) {
        const errorMessage = generateAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(error.message));
      }
    }
  };

export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(trainerLoggedOut());
};

export const signUp = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    console.log(payload);

    const data = await authService.register(payload);
    localStorageService.setTokens(data);
    console.log(data);

    dispatch(authRequestSucces({ trainerId: data.trainerId }));
  } catch (error) {
    dispatch(authRequestFailed(error.message));
  }
};
/*  ----------------------------------------------------------------  */
export const loadTrainersList = () => async (dispatch) => {
  dispatch(trainersRequested());
  try {
    const content = await trainersService.fetchAll();

    dispatch(trainersReceved(content));
  } catch (error) {
    dispatch(trainersRequestFiled(error.message));
  }
};
export const createTrainers = (trainers) => async (dispatch) => {
  try {
    const { content } = await trainersService.createExercise(trainers);
    dispatch(trainersCreate(content));
  } catch (error) {
    dispatch(trainersRequestFiled(error.message));
  }
};
export const getCurrentTrainerData = () => (state) => {
  if (
    state.trainers &&
    state.trainers.entities !== null &&
    state.trainers.auth !== null &&
    state.trainers.entities !== undefined &&
    state.trainers.auth !== undefined
  ) {
    return state.trainers.entities.find(
      (t) => t._id === state.trainers.auth.trainerId
    );
  }
};

export const getTrainers = () => (state) => state.trainers.entities;
export const getTrainersLoadingStatus = () => (state) =>
  state.trainers.isLoading;
export const getAuthErrors = () => (state) => state.trainers.errors;
export const getCurrentTrainerId = () => (state) =>
  state.trainers.auth.trainerId;
export const getIsLoggedIn = () => (state) => state.trainers.isLoggedIn;
export default trainersReducer;
