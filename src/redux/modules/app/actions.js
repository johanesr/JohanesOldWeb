import * as types from './types';

export const setFlash = (type, text) => ({
  type: types.SET_FLASH,
  payload: {
    show: true,
    type,
    text
  }
});

export const resetFlash = () => ({
  type: types.RESET_FLASH
});