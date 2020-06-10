import { CHANGE_ACTIVE_CAR, CLEAN_UP_CREWS_INFO } from './crews.types';

export const changeActiveCar = (carId) => ({
  type: CHANGE_ACTIVE_CAR,
  payload: carId,
});

export const cleanUpCrews = () => ({
  type: CLEAN_UP_CREWS_INFO,
});
