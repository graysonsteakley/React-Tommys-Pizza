import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import RestaurantInfo from './components/RestaurantInfo'
import Footer from './components/Footer'
import styled from 'styled-components'
import CovidPopup from './components/CovidPopup'
import MenuPopup from './components/MenuPopup'
import Restaurant from './components/Restaurant'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Maps from './components/Maps'
import Order from './components/Order'

 

const AppContainer = styled.div`

  width: 100%;
  min-height: 95vh;
  position: relative;

`;

const onXClick = () =>{

  var modal = document.getElementById("covid-modal");
  modal.style.display = "none";

};

window.onclick = function(event) {
  var modal = document.getElementById("covid-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
  var modal = document.getElementById("menu-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function App() {
  return (
    <React.Fragment>
      <Router>
        <AppContainer>
          <NavBar/>
          <Route path ="/" component = {Landing} exact />
          <Route path ="/restaurant" component = {Restaurant} exact />         
          <Route path ="/order" component = {Order} exact />
        </AppContainer>
        <CovidPopup/>
        <MenuPopup/>
        <Route path ="/" component = {RestaurantInfo} exact />
        <Route path ="/" component = {Maps} exact />
        
        <Footer/>  
      </Router>
    </React.Fragment>
  );
}

export default App;
