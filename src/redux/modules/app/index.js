import * as types from './types';

export const initialState = {
  display: {
    isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  },
  flash: {
    show: false,
    type: '',
    text: ''
  }
};

const ACTION_HANDLERS = {
  [types.SET_FLASH]: (state, action) => {
    return {
      ...state,
      flash: action.payload
    };
  },
  [types.RESET_FLASH]: state => {
    return {
      ...state,
      flash: {
        ...state.flash,
        show: false
      }
    };
  }
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  // If handler does not exist (NotFound), return the initial state
  return handler ? handler(state, action) : state;
};