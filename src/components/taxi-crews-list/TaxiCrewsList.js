import React from 'react';
import { connect } from 'react-redux';

import TaxiItem from '../taxi-item';
import TaxiPoster from '../taxi-poster';

import { changeActiveCar } from '../../redux/crews/crews.actions';

import './taxiCrewsList.css';

const TaxiCrewsList = ({
  geoData: {
    crewOrder: { addresses },
  },
  crews: {
    availableCrews: {
      data: { crews_info },
    },
  },
  changeActiveCar,
}) =>
  addresses.map(({ precision, lat }) =>
    precision !== 'exact' ? (
      <TaxiPoster key='taxi-poster' />
    ) : (
      <ul key={lat}>
        {crews_info.map((car) => (
          <TaxiItem
            key={car.crew_id}
            car={car}
            changeActiveCar={changeActiveCar}
          />
        ))}
      </ul>
    )
  );

const mapStateToProps = ({ geoData, crews }) => ({ geoData, crews });

const mapDispatchToProps = (dispatch) => ({
  changeActiveCar: (carId) => dispatch(changeActiveCar(carId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaxiCrewsList);
