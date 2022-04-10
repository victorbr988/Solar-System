import React, { Component } from 'react';

class MissionsCard extends Component {
  render() {

    const { id, mission, year, country, locale} = this.props
    return (
      <div key={id} className="mission-info">
        <div className="title-mission">
          <h2>{mission}</h2>
        </div>
        <div className='description'>
          <p>{year}</p>
          <p>{country}</p>
          <p>{locale}</p>
        </div>
      </div>
    )
  }
}
export default MissionsCard;