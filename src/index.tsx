import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Controller from './components/controller';

function App() {
  return (
    <>
      <Controller />
    </>
  );
}

render(<App />, document.getElementById('root'));