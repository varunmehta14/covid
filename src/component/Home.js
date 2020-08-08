import React from 'react';
import { MDBJumbotron, MDBContainer} from "mdbreact";
import Cards from "./Cards";

const Home = () => {
  return (
    <div>
      <MDBJumbotron fluid>
      <MDBContainer>
        <h2 className="display-4">COVID TRACKER</h2>
        <p className="lead">This is a covid tracker app which displays the current situation of covid spread around the world.</p>
      </MDBContainer>
    </MDBJumbotron>
    <Cards/>
    </div>
    
  )
}

export default Home;
