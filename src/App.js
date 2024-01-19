import './App.css';
import { useState } from 'react';
import data from './components/Data.js';
import Tours from './components/Tours.js';

function App() {
const [tours,setTours]=useState(data);
function removeTour(id){
  const newTours=tours.filter(tour=> tour.id !== id);
  console.log("i am in app.js");
setTours(newTours);
}

if(tours.length === 0){
  return (
    <div>
      <h2>no plans left for you</h2>
      <button onClick={() =>{setTours(data)}}>
        refresh content</button>
    </div>
  )
}

  return (
    <div className="App">
   <h2> tour with bhargav</h2>
   <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
