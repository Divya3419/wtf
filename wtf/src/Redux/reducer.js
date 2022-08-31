import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  TERMS_FAILURE,
  TERMS_REQUEST,
  TERMS_SUCCESS,
} from "./action.type";

const initialState = {
  data: [],
  terms:[],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_DATA_SUCCESS: {
      return { ...state, isLoading: false, isError: false, data: payload };
    }
    case GET_DATA_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case TERMS_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case TERMS_SUCCESS: {
      return { ...state, isLoading: false, isError: false, terms: payload };
    }
    case TERMS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
