import React from "react";
import { Bar } from "react-chartjs-2";
import {MDBProgress} from "mdbreact";
import { MDBContainer,MDBLink } from "mdbreact";
import getCovidData from "../services/getCovidData";

class ChartsPage extends React.Component {
    constructor(){
        super();
        this.state={
            covidData:[]
        }
    }

    async  componentDidMount(){
         const covidData= await getCovidData();
        this.setState({covidData:covidData.covidData})   
    } 
        
    
    
 
  render() {
      const { covidData } = this.state;
      console.log(covidData)
   
  
     if(covidData.length>0){
    console.log(parseFloat(covidData[4].active_cases.replace(/,/g, '')))
      const state = {
        dataBar: {
          labels: [ covidData[4].country_name,covidData[3].country_name , covidData[2].country_name, covidData[1].country_name, covidData[0].country_name],
          datasets: [
            {
              label: "Number of Active Cases",
              data: [parseInt(covidData[4].active_cases.replace(/,/g, '')),parseInt(covidData[3].active_cases.replace(/,/g, '')), parseInt(covidData[2].active_cases.replace(/,/g, '')), parseInt(covidData[1].active_cases.replace(/,/g, '')), parseInt(covidData[0].active_cases.replace(/,/g, ''))],
              backgroundColor: [
                "rgba(255, 134,159,0.4)",
                "rgba(98,  182, 239,0.4)",
                "rgba(255, 218, 128,0.4)",
                "rgba(113, 205, 205,0.4)",
                "rgba(170, 128, 252,0.4)",
              ],
              borderWidth: 2,
              borderColor: [
                "rgba(255, 134, 159, 1)",
                "rgba(98,  182, 239, 1)",
                "rgba(255, 218, 128, 1)",
                "rgba(113, 205, 205, 1)",
                "rgba(170, 128, 252, 1)",
            
              ]
            }
          ]
        },
        barChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: {
                  max: 3000000, min:0
                }
                
              }
            ]
          }
        }
      }   
     return (
     <div classsName="App">
      <MDBContainer>
          <h3 >This is the data of the top 5 countries in the world having most active cases  </h3></MDBContainer>      
      <MDBContainer>
        <h3 className="mt-5">Bar chart</h3>
        <Bar data={state.dataBar} options={state.barChartOptions} />
        <MDBLink className="customClass" to="/">Back To Home Page</MDBLink>
      </MDBContainer>
      </div> 
    );
     }
     return(
       <MDBContainer>
            <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <h1>While this loads Go Wash Your Hands!!!</h1>
      </MDBContainer>

     );
     }
    
    }

export default ChartsPage;