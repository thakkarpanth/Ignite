import {combineReducers} from 'redux' ; 
import gameReducer from './gamesReducer';
import detailReducers from './detailReducer'; 


const rootReducer = combineReducers({
    games : gameReducer , 

    detail : detailReducers,

})


export default rootReducer ; 