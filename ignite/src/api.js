
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



 export const popularGamesURL= ()=> {

    
    return popular_games ; 
}

