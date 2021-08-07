const initialState = {
  loading: false,
  items: [],
  userName: "",
  email: "",
  text: "",
  status: "",
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case "load/task/start":
      return {
        ...state,
        loading: true,
      };

    case "load/task/success":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "add/task/start":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "get/email":
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
}

export const listTasksStart = () => (dispatch) => {
  dispatch({ type: "load/task/start" });

  fetch(
    "https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=musovvir"
  )
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: "load/task/success",
        payload: json,
      });
    });
};

export const addTask = () => (dispatch, getState) => {
  const { email } = getState().list;

  dispatch({
    type: "add/task/start",
    payload: {  email },
  });

  fetch("https://uxcandy.com/~shapoval/test-task-backend/v2", {
    method: "POST",
    headers: {
      Accept: "multipart/form-data",
      "Content-Type": "multipart/form-data",
    },
    body: JSON.stringify({
      email
    }),
  })
    .then((response) => response.json())
    .then(() => {});
  dispatch({
    type: "clear/input",
  });
};

export const getEmail = () => (email) => {
  return { type: "get/email", payload: email };
};
