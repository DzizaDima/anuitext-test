import React from 'react';
import reactDOM from 'react-dom';
import './styles/style.scss';
import HelloUser from './components/CardClass';
import CardForm from './components/CardForm';
const App = () => {
  return (
    <div>
      
      
        <CardForm/>
    </div>
  
  )
}

reactDOM.render(<App />, document.getElementById('root'))