import { combineReducers } from 'redux';

import geoDataReducer from './geo-data/geoData.reducer';
import crewsReducer from './crews/crews.reducer';
import ordersReducer from './orders/orders.reducer';

const rootReducer = combineReducers({
  geoData: geoDataReducer,
  crews: crewsReducer,
  orders: ordersReducer,
});

export default rootReducer;
