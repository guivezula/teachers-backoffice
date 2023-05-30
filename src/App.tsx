import React, { useEffect } from 'react';
import './App.css';
import { fetchMyClasses } from './services/my-class.service';
import { fetchSchedules } from './services/schedule.service';

function App() {
  useEffect(() => {
    async function fetch() {
      const teste = await fetchSchedules();
      console.log(teste);
    };

    fetch();

  }, []);
  
  return (<div></div>);
}

export default App;
