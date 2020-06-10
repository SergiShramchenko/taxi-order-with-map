import { CHANGE_ACTIVE_CAR, CLEAN_UP_CREWS_INFO } from './crews.types';

const initialState = {
  availableCrews: {
    code: 0,
    descr: 'OK',
    data: {
      crews_info: [
        {
          crew_id: 123,
          car_mark: 'Chevrolet',
          car_model: 'Lacetti',
          car_color: 'синий',
          car_number: 'Е234КУ',
          driver_name: 'Деточкин',
          driver_phone: '7788',
          lat: 56.855532,
          lon: 53.217462,
          distance: 300,
          active: true,
        },
        {
          crew_id: 125,
          car_mark: 'Hyundai',
          car_model: 'Solaris',
          car_color: 'белый',
          car_number: 'Ф567АС',
          driver_name: 'Петров',
          driver_phone: '8899',
          lat: 56.860581,
          lon: 53.209223,
          distance: 600,
          active: false,
        },
        {
          crew_id: 127,
          car_mark: 'Toyota',
          car_model: 'Corolla',
          car_color: 'синий',
          car_number: 'A7B2АE',
          driver_name: 'Мышкин',
          driver_phone: '4311',
          lat: 56.845532,
          lon: 53.213462,
          distance: 900,
          active: false,
        },
        {
          crew_id: 129,
          car_mark: 'Renault',
          car_model: 'Logan',
          car_color: 'желтый',
          car_number: 'W2E2АB',
          driver_name: 'Келлер',
          driver_phone: '8549',
          lat: 56.860661,
          lon: 53.190922,
          distance: 1200,
          active: false,
        },
        {
          crew_id: 131,
          car_mark: 'Skoda',
          car_model: 'Octavia',
          car_color: 'красный',
          car_number: 'Н1B2VI',
          driver_name: 'Лебедев',
          driver_phone: '3781',
          lat: 56.835532,
          lon: 53.213662,
          distance: 1500,
          active: false,
        },
      ],
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_CAR:
      return {
        ...state,
        availableCrews: {
          ...state.availableCrews,
          data: {
            ...state.availableCrews.data,
            crews_info: [
              ...state.availableCrews.data.crews_info.map((item) => {
                return {
                  ...item,
                  active:
                    item.crew_id === action.payload ? !item.active : false,
                };
              }),
            ],
          },
        },
      };

    case CLEAN_UP_CREWS_INFO:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
