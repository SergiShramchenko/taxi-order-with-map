import { GET_ADDRES_INFO, CLEAN_UP_GEO_DATA } from './geoData.types';

import { cleanUpCrews } from '../crews/crews.actions';

const apiKey = '6869388d-e68d-4721-bf0c-cdcba8c60533';
const url = 'https://geocode-maps.yandex.ru/1.x/?format=json&apikey=';

export const getAddressInfo = (e, inputValue) => {
  e.preventDefault();
  return async (dispatch) => {
    let res;
    if (inputValue) {
      res = await fetch(`${url}${apiKey}&geocode=Ижевск, ${inputValue}`);
    } else {
      let coords = e.get('coords');
      res = await fetch(`${url}${apiKey}&geocode=${coords[1]},${coords[0]}`);
    }

    dispatch(cleanUpCrews());

    await res
      .json()
      .then(
        ({
          response: {
            GeoObjectCollection: {
              featureMember,
              metaDataProperty: {
                GeocoderResponseMetaData: { request },
              },
            },
          },
        }) => {
          return { featureMember: featureMember[0], request };
        }
      )
      .then(
        ({
          featureMember: {
            GeoObject: {
              Point: { pos },
              name,
              metaDataProperty: {
                GeocoderMetaData: { precision },
              },
            },
          },
          request,
        }) => {
          return {
            pos: pos.split(' '),
            name,
            precision,
            request: request.split(','),
          };
        }
      )
      .then((geoData) => {
        return dispatch({
          type: GET_ADDRES_INFO,
          payload: geoData,
        });
      })
      .catch((err) => console.error(err));
  };
};

export const cleanUpGeoData = () => ({
  type: CLEAN_UP_GEO_DATA,
});
