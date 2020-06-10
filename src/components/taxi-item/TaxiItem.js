import React from 'react';

import './taxiItem.css';

const TaxiItem = ({
  car: {
    crew_id,
    car_mark,
    car_model,
    car_color,
    car_number,
    distance,
    active,
  },
  changeActiveCar,
}) => (
  <li
    onClick={() => changeActiveCar(crew_id)}
    className={active ? 'active' : ''}
  >
    <div className='taxi-crew-container'>
      <div className='taxi-crew-block'>
        <div className='taxi-crews-block__item'>
          <span className='material-icons'>local_taxi</span>
          {car_mark} {car_model}
        </div>
        <div className='taxi-crews-block__item-distance'>
          {distance}
          <span className='material-icons arrow'>keyboard_arrow_right</span>
        </div>
      </div>
      <div className='taxi-crews-block__item-car-color'>
        <span>{car_color}</span> <span>{active ? car_number : ''}</span>
      </div>
    </div>
  </li>
);

export default TaxiItem;
