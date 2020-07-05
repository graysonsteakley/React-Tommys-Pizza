import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

`;

const PageBG = styled.div`
  
  background-image: url('./images/italian_pizza/oven_large.jpg');
  background-size: cover;

  -webkit-filter: blur(px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;

`;


const Logo = styled.div`

  width: 496px;
  height: 302px;
  @media only screen and (max-width: 760px) {
        width: 372px;
        height: 226px;
        background-size: cover;
    }
  /* background-image: url("http://i.stack.imgur.com/2OrtT.jpg"); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  -webkit-filter: invert(1);
  filter: invert(1);

  background: url('./images/italian_pizza/logo.png');
    margin-top: -2rem;

   
 

`;


const AddressContainer = styled.div`

  display: flex;
  width: 75%;
  height: auto;
  justify-content: space-around;
  align-items: center;
  font-size: 3rem;
  color: black;

  >a .btn{

     display:inline-block;
     padding:0.35em 1.2em;
     border:2px solid #FFFFFF;
     margin:0 0.3em 0.3em 0;
     border-radius:0.12em;
     box-sizing: border-box;
     text-decoration:none;
     font-family:'Roboto',sans-serif;
     font-weight:300;
      font-size: 2.5rem;
     color:#FFFFFF;
     text-align:center;
     transition: all 0.2s;
     margin-top: 5rem;


    &:hover{
      background-color: white;
      color: black;
      transform: translateY(-.33rem) scale(1.1);
      cursor: pointer;

    }

    &:active{
        background-color: orange;
        transform: translateY(.31rem) scale(1.0);
    }
  }
  > .Address{
    border-radius: 10px;
    margin-top: 1rem;
    padding: 1rem;
      width: 25%;
      background-color: darkgrey;
  }

`;

function Landing() {
    return (
        <React.Fragment>
            <PageBG/>
            <ContentContainer >

                <Logo/>
                <AddressContainer>
                <a href="https://goo.gl/maps/hH1UhzafpHxMwvxh8" target="_blank">  
                  <div className="btn btn1">Conroe Location</div>
                </a>
                <a href="https://goo.gl/maps/mbRV7trHBa55CvxJ7" target="_blank">
                  <div href="https://goo.gl/maps/mbRV7trHBa55CvxJ7" target="_blank" className="btn btn2">Austin Location</div>
                </a>
                {/* <div className="Address Address-1">
                Tommy's LOCAL TAP + KITCHEN
                1488
                (136) 111-9503
                9876 FARM TO Alley RD 1111
                CONROE, TX 77384
                </div>
                <div className="Address Address-2">
                Tommy's LOCAL TAP + KITCHEN
                1488
                (136) 111-9222
                0123 FARM TO Alley RD 1111
                CONROE, TX 77384
                </div> */}
                </AddressContainer>
        </ContentContainer>
      </React.Fragment>
    )
}

export default Landing
