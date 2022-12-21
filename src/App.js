import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import './css/app.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
