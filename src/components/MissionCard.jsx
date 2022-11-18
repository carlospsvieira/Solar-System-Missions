import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div className="mission-card">
        <span className="mission-name">{ name }</span>
        <span className="mission-year">{ year }</span>
        <span className="mission-country">{ country }</span>
        <span className="mission-destination">{ destination }</span>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};