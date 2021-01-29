import React from 'react' ; 
import styled from 'styled-components'; 
import {motion} from 'framer-motion'; 


import {useSelector} from 'react-redux'; 
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'; 
import {smallImage} from '../util'; 

const GameDetail = (id) => {


    const history = useHistory(); 
    const {screen , game , isLoading} = useSelector(state => state.detail); 

   
    const exitDetailHandler = (e) => {
        const element = e.target ;

        console.log("element is  " + element);
        if(element.classList.contains('shadow'))
        {
            document.body.style.overflow = 'auto'; 
            history.push('/'); 
        }

    };
    return(
        <>
        <div>
            {!isLoading && (
           <CardShadow className = "shadow" onClick = {exitDetailHandler}>
                
                <Detail LayoutId  = {id}> 
                    <Link to={'/'}>
                        <button >
                            Close 
                        </button>
                    </Link>
                    <Stats>
                        <div className="rating">
                            <h3>{game.name}</h3>
                            <p>Rating : {game.rating}</p>
                        </div>
                        <Info>
                            <h3>Platforms</h3>

                            <Platforms>
                                {game.platforms.map(data => (
                                    <h3 key = {data.platform.id}>{data.platform.name}</h3>
                                ))}
                            </Platforms>
                        </Info>

                    </Stats>
                    <Media>
                        <img src={smallImage(game.background_image , 1280)} alt=""/>
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <div className="gallery">
                        {screen.results.map(screen => (
                            <img key = {screen.id} src={smallImage(screen.image , 1280)} alt=""/>
                        ))}
                    </div>
                </Detail>
            </CardShadow> )}
        </div>
        </>
    ); 
}

const CardShadow = styled(motion.div)`

    width : 100%;
    min-height : 100vh ; 
    overflow-y : scroll ; 
    background: rgba(0,0,0,0.5) ;
    position : fixed ; 
    top : 0 ; 
    left : 0 ; 

    &::-webkkit-scrollbar{
        width : 0.5rem ; 
    }

    &::-webkkit-scrollbar-thumb{
        background-color : #ff7676; 
    }
 

`
const Detail = styled(motion.div)`

    width : 80% ; 
    border-radius : 1rem ; 
    padding : 2rem 5rem ; 
    background : white ;
    position : absolute ; 
    left : 10% ; 
    color : black; 
    img {
        width : 100% ;
    }

`

const Stats = styled(motion.div)`

    display : flex ; 

    align-items : center ;
    justify-content : space-between ; 


`

const Info = styled(motion.div)`

    text-align : center ;    

`

const Platforms = styled(motion.div)`

    display : flex ; 
    justify-content : space-evenly ; 
    img {
        margin-left : 3rem ; 
    }

`

const Media = styled(motion.div)`
    margin-top : 5rem ; 
    img {
        width : 100% ; 
        

    }

`

const Description = styled(motion.div)`

    margin : 5rem 0 rem ; 

`
export default GameDetail ; 