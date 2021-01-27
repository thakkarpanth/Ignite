
import React , {useEffect} from 'react'; 
import {useDispatch , useSelector} from 'react-redux'; 
import {loadGames} from '../actions /gameAction'
import styled from 'styled-components'; 
import {motion} from 'framer-motion'; 
import Game from '../components/game';

const Home = () => {

    const dispatch = useDispatch(); 
    useEffect(()=>{
        dispatch(loadGames());
      },[dispatch]);

    const {popualar , upcoming  , newGames} = useSelector(state => state.games) ; 
    
    return (
        <GameList> 

            <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map(game => (
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