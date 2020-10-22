import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const IS_FETCHING = "IS_FETCHING";
export const FETCH_PLANTID_SUCCESS = "FETCH_PLANTID_SUCCESS";
export const FETCH_PLANTID_FAILURE = "FETCH_PLANTID_FAILURE";
export const FETCH_USERID_SUCCESS = "FETCH_USERID_SUCCESS";
export const FETCH_USERID_FAILURE = "FETCH_USERID_FAILURE";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_FAILURE = "POST_LOGIN_FAILURE";
export const POST_SIGNUP_SUCCESS = "POST_SIGNUP_SUCCESS";
export const POST_SIGNUP_FAILURE = "POST_SIGNUP_FAILURE";
export const POST_PLANT_SUCCESS = "POST_PLANT_SUCCESS";
export const POST_PLANT_FAILURE = "POST_PLANT_FAILURE";
export const UPDATE_PLANT_SUCCESS = "UPDATE_PLANT_SUCCESS";
export const UPDATE_PLANT_FAILURE = "UPDATE_PLANT_FAILURE";
export const UPDATE_PLANTWATER_SUCCESS = "UPDATE_PLANTWATER_SUCCESS";
export const UPDATE_PLANTWATER_FAILURE = "UPDATE_PLANTWATER_FAILURE";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const DELETE_PLANT_FAILURE = "DELETE_PLANT_FAILURE";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const getPlantByID = (id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .get(`/plants/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_PLANTID_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_PLANTID_FAILURE, payload: err });
    });
};

export const getUserByID = (id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .get(`/users/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_USERID_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_USERID_FAILURE, payload: err });
    });
};

export const requestLogin = (userData) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .post("/login", userData)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data });
      console.log(res.data)
    })
    .catch((err) => {
      dispatch({ type: POST_LOGIN_FAILURE, payload: err });
    });
};

export const requestSignup = (userData) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .post("/register", userData)
    .then((res) => {
      dispatch({ type: POST_SIGNUP_SUCCESS, payload: res.data });
      console.log(res.data);
      console.log(userData);
    })
    .catch((err) => {
      dispatch({ type: POST_SIGNUP_FAILURE, payload: err });
    });
}; 

export const addPlant = (plantData, id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .post(`/users/${id}/plants`, plantData)
    .then((res) => {
      dispatch({ type: POST_PLANT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_PLANT_FAILURE, payload: err });
    });
};

export const updatePlant = (plantData, id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .put(`plants/${id}`, plantData)
    .then((res) => {
      dispatch({ type: UPDATE_PLANT_SUCCESS, payload: res.data, plantID: id });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_PLANT_FAILURE, payload: err });
    });
};

export const updatePlantWater = (id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .put(`plants/${id}/water`)
    .then((res) => {
      dispatch({
        type: UPDATE_PLANTWATER_SUCCESS,
        payload: res.data,
        plantID: id,
      });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_PLANTWATER_FAILURE, payload: err });
    });
};

export const updateUser = (userData, id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .put(`users/${id}`, userData)
    .then((res) => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_USER_FAILURE, payload: err });
    });
};

export const deletePlant = (id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .delete(`plants/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_PLANT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_PLANT_FAILURE, payload: err });
    });
};

export const deleteUser = (id) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .delete(`users/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_USER_FAILURE, payload: err });
    });
};
