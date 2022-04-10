import React, { Component } from "react";

class Planets extends Component {
  render() {
    const { image, name, id, classe} = this.props
    return (
      <div className="planet-card">
        <img className={classe} src={image} alt={`Planeta ${name}`} key={id}/>
        <p key={'p' + id}>{name}</p>
      </div>
    )
  }
}
export default Planets;