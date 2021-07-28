import React from 'react';
import './App.css';
import FlightList from './Components/FlightList'
// import Flight from './Components/FlightById';

const App: React.FC = () => {
  return <>
 <div className='container'>
  {/* <Flight/> */}
   <FlightList/>
 </div>
  </>
}

export default App;
