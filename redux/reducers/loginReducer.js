import { OPEN_LOGIN_MODEL } from "../types/actionTypes";

const initialState = {
  modelOpen: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODEL:
      return {
        ...state,
        modelOpen: true,
      };
    default:
      state;
  }
};

export default loginReducer;
