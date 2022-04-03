import React,{useState,useEffect} from 'react';
import getCovidData from "../services/getCovidData";
import { MDBDataTable ,MDBLink,MDBContainer} from 'mdbreact';

const Data=()=>{
    const[covidData,setCovidData]=useState([]);
useEffect (()=>{
    async function fetchData(){
 const covidData= await getCovidData()

// .then((res)=> {
//   console.log(res);
console.log(covidData)
 
  setCovidData(covidData.covidData);

   
    }
    fetchData();
 
},[]); 


const info={
        columns:[
            {
                label: 'No.',
                field: 'number',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Country Name',
                field: 'Country_Name',
                sort: 'asc',
                width: 270
              },
              {
                label: 'Recoveries',
                field: 'Recoveries',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Total Cases',
                field: 'Total_cases',
                sort: 'asc',
                width: 100
              }
        ],
        rows:
            covidData.map((data,index)=>{
          return { 
            number:index+1,
            Country_Name:data.country_name,
            Recoveries:data.total_recovered,
            Total_cases:data.cases, 
           }
        
    })
}
if(covidData.length>0){
return(
<div>
<MDBDataTable striped
      bordered
      small
      data={info}
      hover
      tbodyColor="primary-color" color="white">
  </MDBDataTable>
  <MDBLink className="customClass" to="/">Back To Home Page</MDBLink>  
</div>
);
}
return(
  <MDBContainer>
 <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
        
      </div>
      <h1>Hope this Data motivates you to take care of yours and your LOVED ones</h1>
  </MDBContainer>
 
) ;  
};
export default Data;
 