import { CHANGE_ACTIVE_CAR } from './crews.types';

export const changeActiveCar = (carId) => ({
  type: CHANGE_ACTIVE_CAR,
  payload: carId,
});
