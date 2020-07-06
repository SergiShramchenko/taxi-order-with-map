import { GET_TAXI_ORDER } from './orders.types';

const initialState = {
  order: {
    source_time: null,
    addresses: [
      {
        address: '',
        lat: null,
        lon: null,
      },
    ],
    crew_id: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TAXI_ORDER:
      return {
        ...state,
        order: {
          source_time: action.source_time,
          addresses: action.addresses.map(({ address, lat, lon }) => {
            return { address, lat, lon };
          }),

          crew_id: action.crewId,
        },
        orderRes: {
          code: 0,
          descr: 'OK',
          data: {
            order_id: action.crewId,
          },
        },
      };
    default:
      return state;
  }
};
