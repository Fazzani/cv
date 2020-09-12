import React from 'react';
import './App.css';
import CardGrid  from './components/card.grid';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <CardGrid></CardGrid>
    </div>
  );
}

export default App;
