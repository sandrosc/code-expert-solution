import React from 'react';
import Directory from './components/Directory';
import './App.css';

import fileTree from './fileTree';

function App() {
  return (
    <div className="App">
      <Directory directory={fileTree} />
    </div>
  );
}

export default App;
