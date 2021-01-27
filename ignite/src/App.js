import {popularGamesURL } from './api';
import React , {useEffect} from 'react'; 
import Home from './pages/home';

function App() {
  //console.log(popularGamesURL());
  
  return (
    <div className="App">
      <h1>Hello Ignite</h1>
      <Home />
    </div>
  );
}

export default App;
