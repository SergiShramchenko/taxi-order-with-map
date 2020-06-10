import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { connect } from 'react-redux';

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
        {addresses.map(({ lat, lon, precision }) => (
          <Placemark
            key={lat + lon}
            geometry={[lat, lon]}
            options={{
              iconColor: ` ${
                precision === 'exact' ? 'rgb(243, 190, 76)' : 'tomato'
              }  `,
            }}
          />
        ))}

        {addresses.map(({ lat, lon, precision }) =>
          precision === 'exact'
            ? crews_info.map(({ lat, lon, crew_id }) => (
                <Placemark
                  key={crew_id}
                  geometry={[lat, lon]}
                  options={{ iconColor: 'blue' }}
                />
              ))
            : null
        )}
      </Map>
    </YMaps>
  </div>
);

const mapStateToProps = ({ geoData, crews }) => ({ geoData, crews });

const mapDispatchToProps = (dispatch) => ({
  getAddressInfo: (e) => dispatch(getAddressInfo(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(YandexMap);
