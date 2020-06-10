import { GET_TAXI_ORDER } from './orders.types';

import { cleanUpGeoData } from '../geo-data/geoData.actions';

export const orderTaxi = (source_time, addresses, crewId) => (dispatch) => {
  dispatch({ type: GET_TAXI_ORDER, source_time, addresses, crewId });
  dispatch(cleanUpGeoData());
};
