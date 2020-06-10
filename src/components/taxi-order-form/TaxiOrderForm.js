import React from 'react';
import { connect } from 'react-redux';

import SearchInput from '../search-input';
import TaxiCrewsList from '../taxi-crews-list';
import OrderButton from '../order-button';

import { getAddressInfo } from '../../redux/geo-data/geoData.actions';
import { orderTaxi } from '../../redux/orders/orders.actions';

import './taxiOrderForm.css';

const TaxiOrderForm = ({
  geoData,
  getAddressInfo,
  geoData: {
    crewOrder: { addresses, source_time },
  },
  crews: {
    availableCrews: {
      data: { crews_info },
    },
  },
  orderTaxi,
}) => {
  const submitOrder = (e) => {
    e.preventDefault();

    const coord = addresses.map((item) => item);
    const crewId = crews_info.find(({ active }) => active);

    coord.map(({ precision }) => {
      if (precision !== 'exact')
        return alert('No address selected. Please select an address first!');
      else if (!crewId) return alert('Please select the car!');
      else {
        orderTaxi(source_time, coord, crewId.crew_id);
        alert('Success! Request accepted, please wait!');
      }
    });
  };

  return (
    <form className='taxi-details' onSubmit={(e) => submitOrder(e)}>
      <h3>Детали заказа</h3>
      <SearchInput geoData={geoData} getAddressInfo={getAddressInfo} />
      <TaxiCrewsList />
      <OrderButton />
    </form>
  );
};

const mapStateToProps = ({ geoData, crews }) => ({
  geoData,
  crews,
});

const mapDispatchToProps = (dispatch) => ({
  getAddressInfo: (e, inputValue) => dispatch(getAddressInfo(e, inputValue)),
  orderTaxi: (source_time, addresses, crewId) =>
    dispatch(orderTaxi(source_time, addresses, crewId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaxiOrderForm);
