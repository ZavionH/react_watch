import React, { Component } from 'react';
import emoji from './emoji.svg'
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Watch Brands</h2>
        <ol>
          <li>Rolex</li>
          <li>Tag Heur</li>
          <li>Panerai</li>
          <li>Hublot</li>
          <li>Breitling</li>
        </ol>
        <img src={emoji} alt={'Watch Presentation'}></img>
      </div>
    );
  }
}
 
export default Stuff;