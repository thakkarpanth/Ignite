
//Base URL 
const base_url = 'https://api.rawg.io/api/'; 

// Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1; 

     
    if(month < 10)
    {
        return `0${month}`;

    }
    else
    {
        return month ; 
    }



}

//Getting the date
const getCurrentDay = () => {
    const day = new Date().getDate();  
    if(day < 10)
    {
        return `0${day}`;

    }
    else
    {
        return day; 
    }



}

const currentYear = new Date().getFullYear(); 
const currentMonth = getCurrentMonth(); 
const currentDay = getCurrentDay();


const currDate = `${currentYear}-${currentMonth}-${currentDay}`;
const prevDate = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextDate = `${currentYear+1}-${currentMonth}-${currentDay}`;


//Popular Games
getCurrentMonth(); 
const popular_games = base_url + `games?dates=${prevDate},${currDate}&ordering=-rating&page_size=10`;

const upcoming_games = base_url + `games?dates=${currDate},${nextDate}&ordering=-added&page_size=10` ; 


const new_games = base_url +  `games?dates=${prevDate},${currDate}&ordering=-released&page_size=10`
 export const popularGamesURL= ()=> {

    
    return popular_games ; 
}

export const upcomingGamesURL = () => {
    return upcoming_games; 
}

export const newGamesURL = () => {
    return new_games ; 
}

// GAME DETAILS

export const gameDetailsURL = (id) => {

    return base_url + `games/${id}`; 
}

export const gameScreenshotURL = (id) => {

    return base_url + `games/${id}/screenshots`; 
}


export const searchGameURL = (game_name) => {
    
   return  `${base_url}games?search=${game_name}&page_size=9`
}