import React, { Component } from 'react';
import './ItemListContainer.css';

export default class ItemListContainer extends Component {
  render() {
    return (
      <div className="container">
          <p>Soy la clase ItemListContainer - Greeting prop: {this.props.greeting}</p>
      </div>
    );
  }
}