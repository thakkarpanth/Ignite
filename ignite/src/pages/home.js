
import React , {useEffect} from 'react'; 
import {useDispatch , useSelector} from 'react-redux'; 
import {loadGames} from '../actions /gameAction'
import styled from 'styled-components'; 
import {motion} from 'framer-motion'; 
import Game from '../components/game';
import GameDetail from '../components/GameDetail';

import {useLocation} from 'react-router-dom'; 

import {AnimatePresence , AnimateSharedLayout} from 'framer-motion'; 

const Home = () => {

    const location = useLocation(); 
   
    const path = location.pathname.split("/") ;
    const id = path[2] ; 
    

    const dispatch = useDispatch(); 

    useEffect(()=>{
        dispatch(loadGames());
      },[dispatch]);

    const {popular , upcoming  , newGames} = useSelector(state => state.games) ; 
    
    return (
        <GameList> 
           
            
            {id && <GameDetail id = {id}/>}     
            <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map(game => (
                        <Game name = {game.name} released = {game.released} id = {game.id} 
                            image = {game.background_image} key = {game.id}/>
                    ))}
                </Games>
                
                <h2>Popular Games</h2>
                <Games>
                    {popular.map(game => (
                        <Game name = {game.name} released = {game.released} id = {game.id} 
                            image = {game.background_image} key = {game.id}/>
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map(game => (
                        <Game name = {game.name} released = {game.released} id = {game.id} 
                            image = {game.background_image} key = {game.id}/>
                    ))}
                </Games>

           
        </GameList>
    ); 
}


const GameList = styled(motion.div)`


    padding : 0rem 5rem ; 
    h2{
        padding : 5rem 0rem  ;
    }

`

const Games = styled(motion.div)`

    min-height : 80vh ; 
    display : grid ; 
    grid-template-columns : repeat(auto-fit , minmax(500px , 1fr));
    grid-column-gap : 3rem ; 
    grid-row-gap : 5rem ; 

`
export default Home; 