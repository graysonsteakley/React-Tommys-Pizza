import React from 'react'
import {CovidModal} from '../utils/modalStyles'

const onXClick = () =>{

    var modal = document.getElementById("covid-modal");
    modal.style.display = "none";
  
  };
  
  window.onclick = function(event) {
    var modal = document.getElementById("covid-modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  

function CovidPopup() {
    return (
        <CovidModal id="covid-modal">
        <div className="bg-warning modal-content">
          <span onClick={()=> onXClick()} className="close">&times;</span>
          <h1 className = "heading bg-danger mt-4 text-center bold">Covid-19 OPERATIONS</h1>
          <h5 className ="lead mt-3 mb-3">
             Tommy's is still open and is ready to serve high-quality and tasty food, 
             with your safety and care at the forefront of our minds during the corona virus shutdown.
             We are opening our Dine In area in accordance to permitted allowances within our 
             local counties, as to minimize risk, and better combat the spread of the virus.
              We are still operating pickup and delivery service, under accordance with local state law.
              We are still working with 3rd parties for delivery as well!
          </h5>
          <h3 className="text-center"> Thank you for your continued support during these times.</h3>
        </div>
      </CovidModal>
    )
}

export default CovidPopup
