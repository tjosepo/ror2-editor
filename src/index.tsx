import React from 'react';
import { render } from 'react-dom';
import Controller from './components/controller';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

function App() {
  return (
    <>
      <Controller />
    </>
  );
}

render(<App />, document.getElementById('root'));