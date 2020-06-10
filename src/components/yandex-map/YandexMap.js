import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import { connect } from 'react-redux';

import TargetPlacemark from '../target-placemark';
import CrewPlacemark from '../crew-placemark';

import { getAddressInfo } from '../../redux/geo-data/geoData.actions';

import './yandexMap.css';

const YandexMap = ({
  geoData: {
    crewOrder: { addresses },
  },
  crews: {
    availableCrews: {
      data: { crews_info },
    },
  },
  getAddressInfo,
}) => (
  <div className='taxi-map'>
    <YMaps>
      <Map
        className='ymap'
        defaultState={{ center: [56.839439, 53.218803], zoom: 15 }}
        onClick={(e) => getAddressInfo(e)}
      >
        <TargetPlacemark addresses={addresses} />
        <CrewPlacemark addresses={addresses} crews_info={crews_info} />
      </Map>
    </YMaps>
  </div>
);

const mapStateToProps = ({ geoData, crews }) => ({ geoData, crews });

const mapDispatchToProps = (dispatch) => ({
  getAddressInfo: (e) => dispatch(getAddressInfo(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(YandexMap);
