import {popularGamesURL } from './api';
import React , {useEffect} from 'react'; 
import Home from './pages/home';

import GlobalStyles from './components/GlobalStyles';


import {Route} from 'react-router-dom'; 

function App() {
  //console.log(popularGamesURL());
  
  return (
    <div className="App">
      
      <GlobalStyles/>
      <Route path = {["/gane/:id" , "/"]}>
        <Home />
      </Route>
      
    </div>
  );
}

export default App;
