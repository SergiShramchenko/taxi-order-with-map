import React from 'react';
import { Placemark } from 'react-yandex-maps';

export default ({ addresses, crews_info }) =>
  addresses.map(({ precision }) =>
    precision === 'exact'
      ? crews_info.map(({ lat, lon, crew_id }) => (
          <Placemark
            key={crew_id}
            geometry={[lat, lon]}
            options={{ iconColor: 'blue' }}
          />
        ))
      : null
  );
