import axios from "axios";
import {
  GET_CITY_FAILURE,
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  TERMS_FAILURE,
  TERMS_REQUEST,
  TERMS_SUCCESS,
} from "./action.type";


export const getData = (payload) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  return axios
    .get(
      "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231",
      payload
    )
    .then((r) => {
      dispatch({ type: GET_DATA_SUCCESS, payload: r.data.data });
      return { type: GET_DATA_SUCCESS };
    })
    .catch((e) => {
      dispatch({ type: GET_DATA_FAILURE, payload: e });
      return { type: GET_DATA_FAILURE };
    });
};


export const getDataCity = (payload) => (dispatch) => {
  dispatch({ type: GET_CITY_REQUEST });
  return axios
    .get("https://devapi.wtfup.me/gym/places", payload)
    .then((r) => {
      dispatch({ type: GET_CITY_SUCCESS, payload: r.data.data });
      return { type: GET_CITY_SUCCESS };
    })
    .catch((e) => {
      dispatch({ type: GET_CITY_FAILURE, payload: e });
      return { type: GET_CITY_FAILURE };
    });
};


export const getDataterm = (payload) => (dispatch) => {
  dispatch({ type: TERMS_REQUEST });
  return axios
    .get(
      "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231",
      payload
    )
    .then((r) => {
      dispatch({ type: TERMS_SUCCESS, payload: r.data.terms });
      return { type: TERMS_SUCCESS };
    })
    .catch((e) => {
      dispatch({ type: TERMS_FAILURE, payload: e });
      return { type: TERMS_FAILURE };
    });
};
