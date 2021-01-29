import {popularGamesURL } from './api';
import React , {useEffect} from 'react'; 
import Home from './pages/home';
import Nav from './components/Nav';
import GlobalStyles from './components/GlobalStyles';


import {Route} from 'react-router-dom'; 

function App() {
  //console.log(popularGamesURL());
  
  return (
    <div className="App">
      
      <GlobalStyles/>
      <Route path = {["/gane/:id" , "/"]}>
        <Nav/>
        <Home />
      </Route>
      
    </div>
  );
}

export default App;
