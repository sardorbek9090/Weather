import React from 'react';
import axios from 'axios';

const URL="https://api.openweathermap.org/data/2.5/weather"
const API_Key= "654d6b5132c6d8ba538cfff9b5e1c6e5"


export const apiWeather = async (query)=>{
    const data = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_Key,
        }
    })
    return data.data
}