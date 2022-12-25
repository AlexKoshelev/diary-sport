import { createSlice } from "@reduxjs/toolkit";
import clientsService from "../services/clients.servces";

//createSlice(): принимает объект, содержащий редуктор, название части состояния (state slice), начальное значение состояния, и автоматически генерирует частичный редуктор с соответствующими создателями и типами операции
const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    clientsRequested: (state) => {
      state.isLoading = true;
    },
    clientsReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    clientsRequestFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clientsCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    clientsRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (clients) => clients._id !== action.payload
      );
    },
    clientUpdeted: (state, action) => {
      const elementIndex = state.entities.findIndex(
        (t) => t._id === action.payload._id
      );
      state.entities[elementIndex] = action.payload;
    },
  },
});

const { reducer: clientsReducer, actions } = clientsSlice;

const {
  clientsRequested,
  clientsReceved,
  clientsRequestFiled,
  clientsCreated,
  clientsRemoved,
  clientUpdeted,
} = actions;

export const updateClient = (id, data) => async (dispatch) => {
  console.log(id);
  console.log(data);

  try {
    const content = await clientsService.update(id, data);

    dispatch(clientUpdeted(content));
  } catch (error) {
    dispatch(clientsRequestFiled(error.message));
  }
};
export const loadClientsList = () => async (dispatch) => {
  dispatch(clientsRequested());
  try {
    const content = await clientsService.fetchAll();
    dispatch(clientsReceved(content));
  } catch (error) {
    dispatch(clientsRequestFiled(error.message));
  }
};
export const createClients = (payload) => async (dispatch) => {
  try {
    const { content } = await clientsService.createClient(payload);

    console.log(content);

    dispatch(clientsCreated(payload));
  } catch (error) {
    dispatch(clientsRequestFiled(error.message));
  }
};
export const removeClient = (_id) => async (dispatch) => {
  console.log(_id);
  try {
    const content = await clientsService.removeClient(_id);
    if (content === null) {
      dispatch(clientsRemoved(_id));
    }
  } catch (error) {
    dispatch(clientsRequestFiled(error.message));
  }
};
export const getCurrentClientData = () => (state) => {
  return state.clients.entities
    ? state.clients.find((с) => с._id === state.users.auth.userId)
    : null;
};
export const getClients = () => (state) => state.clients.entities;

export const getClientsLoadingStatus = () => (state) => state.clients.isLoading;
export const getClientsById = (id) => (state) => {
  console.log(state);

  if (state.clients.entities && state.clients.entities !== undefined) {
    return state.clients.entities.filter((client) => client.trainerId === id);
  }
};
export const getCurrentClientsById = (id) => (state) => {
  if (state.clients.entities && state.clients.entities !== undefined) {
    return state.clients.entities.find((client) => client._id === id);
  }
};
export default clientsReducer;
