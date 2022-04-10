import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { title } = this.props
    return (
      <div>
        <h2>{ title }</h2>
      </div>
    )
  }
}

export default Title;