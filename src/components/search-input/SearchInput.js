import React, { Component } from 'react';

import './searchInput.css';

class SearchInput extends Component {
  state = {
    inputValue: '',
    invalid: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const {
      geoData: { crewOrder },
    } = this.props;

    if (prevProps.geoData.crewOrder !== crewOrder) {
      this.setState({
        inputValue: crewOrder.addresses.map(({ address, precision }) =>
          precision === 'exact' ? address : ''
        ),
      });
    }
  }

  handleChange = (e) =>
    this.setState({ inputValue: e.target.value, invalid: false });

  handleSubmit = async (e, submitFunc) => {
    const { inputValue } = this.state;

    if (e.key === 'Enter' && inputValue) {
      e.preventDefault();

      await submitFunc(e, inputValue);

      const {
        geoData: {
          crewOrder: { addresses },
        },
      } = this.props;

      addresses.map(({ precision, address }) =>
        precision !== 'exact'
          ? this.setState({ inputValue: '', invalid: true })
          : this.setState({ inputValue: address, invalid: false })
      );
    }
  };

  render() {
    const { inputValue, invalid } = this.state;
    const { getAddressInfo } = this.props;

    return (
      <input
        className={`search-input ${invalid ? 'invalid' : ''}`}
        type='text'
        placeholder='откуда: Пушкинская, 144'
        required
        onChange={this.handleChange}
        value={inputValue}
        onKeyDown={(e) => this.handleSubmit(e, getAddressInfo)}
      />
    );
  }
}

export default SearchInput;
