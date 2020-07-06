import { GET_ADDRES_INFO, CLEAN_UP_GEO_DATA } from './geoData.types';

const initialState = {
  crewOrder: {
    source_time: null,
    addresses: [
      {
        address: '',
        lat: null,
        lon: null,
      },
    ],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRES_INFO:
      return {
        ...state,
        crewOrder: {
          source_time: 20130101010101,
          addresses: [
            {
              address: action.payload.name,
              lat:
                action.payload.precision === 'exact'
                  ? action.payload.pos[1]
                  : action.payload.request[1],
              lon:
                action.payload.precision === 'exact'
                  ? action.payload.pos[0]
                  : action.payload.request[0],
              precision: action.payload.precision,
              request: action.payload.request,
            },
          ],
        },
      };
    case CLEAN_UP_GEO_DATA:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
