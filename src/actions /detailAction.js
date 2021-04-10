import axios from 'axios'; 
import {gameDetailsURL , gameScreenshotURL} from '../api'; 

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type : "LOADING_DETAIL", 
    })
    const data = await axios.get(gameDetailsURL(id));
    const screenShotData = await axios.get(gameScreenshotURL(id));
    dispatch({
        type : "GET_DETAIL" ,
        payload : {
            game : data.data ,
            screen : screenShotData.data, 
        }
    }) ; 

}