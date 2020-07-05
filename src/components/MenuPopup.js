import React from 'react'
import {MenuModal} from '../utils/modalStyles'

const onXClick = () =>{

    var modal = document.getElementById("menu-modal");
    modal.style.display = "none";
  
  };
  
  window.onclick = function(event) {
    var menumodal = document.getElementById("menu-img");
    if (event.target !== menumodal) {
        menumodal.style.display = "none";
    }
  }
  

function MenuPopup() {
    return (
        <MenuModal id="menu-modal">
            {/* <div className="modal-content"> */}
              
                <img src="./images/italian_pizza/Menu.jpg" alt=""/>
                {/* <span id="menu-img" onClick={()=> onXClick()} className="close">&times;</span> */}
            {/* </div> */}
        </MenuModal>
    )
}

export default MenuPopup