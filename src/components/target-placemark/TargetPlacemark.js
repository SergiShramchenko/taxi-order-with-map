import React from 'react';

import { Placemark } from 'react-yandex-maps';

export default ({ addresses }) =>
  addresses.map(({ lat, lon, precision }) => (
    <Placemark
      key={lat + lon}
      geometry={[lat, lon]}
      options={{
        iconColor: ` ${
          precision === 'exact' ? 'rgb(243, 190, 76)' : 'tomato'
        }  `,
      }}
    />
  ));
