import { TOGGLE_LOGIN_MODEL } from "../types/actionTypes";

const initialState = {
  modalOpen: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_MODEL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    default:
      return state;
  }
};

export default loginReducer;
