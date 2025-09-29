import axios from "axios";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGN_UP = "SIGN_UP";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const signUp = (user) => {
  return {
    type: SIGN_UP,
    payload: user
  }
}

export const login = (user) => {
  return {
    type: LOGIN,
    payload: user
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const registerUser = (user) => (dispatch) => {
  axios.post("https://workintech-fe-ecommerce.onrender.com/signup", user)
    .then((response) => {
      dispatch(signUp(response.data));
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      console.log("Registration finished.");
    });
}

export const loginUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post("https://workintech-fe-ecommerce.onrender.com/login", user);
    dispatch(login(response.data));
    return response.data; 
  } catch (error) {
    console.error("Error:", error);
    throw error; 
  } finally {
    console.log("Login finished.");
  }
};


