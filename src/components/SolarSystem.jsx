import React, { Component } from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="planets-container">
        <div className="planets-collum">
          { Planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />
          )) }
        </div>
      </div>
    );
  }
}