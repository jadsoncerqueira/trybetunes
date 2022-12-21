import React from 'react';
import loading from "../images/loading.png"
import '../css/carregando.css';

class Carregando extends React.Component {
  render() {
    return (
      <div id="loa">
        <img src={ loading }/>
        <p>loading..</p>
      </div>
    );
  }
}

export default Carregando;
