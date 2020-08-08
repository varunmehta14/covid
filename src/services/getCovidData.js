import React from 'react';
const getCovidData=()=>{
    
     return fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key": "516de86709msh9ff4cc3fdda2325p1b6265jsn14e2f8064fd8"
        }
    })
    
    .then((data)=>data.json())
    .then((dataJson)=>{console.log(dataJson.countries_stat)
        return {covidData:dataJson.countries_stat};
    
  
    })
    .catch((error)=>{console.log(error)
        return error;
    })
    // .then((data)=>data.json())
    // .then((dataJson)=>{console.log(dataJson.temp.main)
    //     return dataJson.temp.main;
    // })
    // .catch((error)=>{console.log(error)
    //     return error;
       
    // });
   
    
    }

    export default getCovidData;
    