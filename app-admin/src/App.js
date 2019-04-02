import React, { Component } from 'react';

import { Header } from './components/includes/Header';
import { Sidebar } from './components/includes/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  }
}

export default App;
