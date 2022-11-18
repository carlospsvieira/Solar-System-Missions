import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card" className="planet-card">
        <div className="planet-name">
          <span data-testid="planet-name">{planetName}</span>
        </div>
        <div className="planet-img">
          <img src={ planetImage } alt={ `Planet ${planetName}` } />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};