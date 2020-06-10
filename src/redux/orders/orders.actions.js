import { GET_TAXI_ORDER } from './orders.types';

export const orderTaxi = (source_time, addresses, crewId) => ({
  type: GET_TAXI_ORDER,
  source_time,
  addresses,
  crewId,
});
