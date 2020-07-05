import React from 'react'
import styled from 'styled-components'
import {FadeInLeft, FadeInRight, FadeInSection} from '../utils/Fade_On_Scroll'


const InfoWrapper = styled.div`


width: 100%;
min-height: 120vh;
background-color: #eee;
display: flex;
align-items: stretch;
justify-content: center;
padding: 1rem 3rem 5rem 3rem;   

`;

const RefferalWrapper = styled.div`

    @media only screen and (max-width:600px){
        display:none;
    }

    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 4rem;
    padding: 0 4rem;
    flex: 1;
    color: #B73239;

    >.post{
        padding-bottom: 2rem;
        border-bottom: 2px solid lightgray;
        transition: all 0.2s;
/* 
        &:hover{

            color: black;
            transform: scale(1.02) translateY(.5rem);


        } */
    }
    
`;


const SideBarWrapper = styled.div`

    padding-right: 3rem;
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    align-items: center;

`;

const SpanTitle = styled.span`

    display: inline-block;
    font-size: 4rem;
    padding: 1rem 0.5rem;
    color: red;
    font-weight: 700;
    letter-spacing: 2.4px;
    

`;

const HoursSpan = styled.span`

    font-size: 2rem;

`;

const BoldSpan = styled.span`
    font-size: 2rem;

    font-weight: bold;

`;



function RestaurantInfo() {
    return (
        <InfoWrapper>
            
            <RefferalWrapper>
                <FadeInRight>
                    <div className="Top-10-Rec post">
                    “ Named Top 10 Pizza Restaurants in the Country by Gayot.com, Houston’s best pizza by PaperCity & OutSmart magazine 2016 readers’ choice award, listed by Eater.com as a Top Excellent Pizza Restaurant in Houston, and awarded The A+ Award by KPRC Channel 2 News!
                    </div>
                </FadeInRight>

                <FadeInRight>
                <div className="Customer-Rec post font-weight-bold">
                HERE IS WHAT SOME OF OUR CUSTOMERS HAVE SAID ABOUT BOLLO WOODFIRED PIZZA!
                </div>
                </FadeInRight>


                <FadeInRight>
                <p className="text-center lead">
                    Tommy's is one of my family’s favorite local dining establishments. 
                    If you’re looking for a twist on the traditional pizza, you must give the 
                    Double Decker pizza a try. The atmosphere is great and the staff too. Highly recommend!
                </p>
                </FadeInRight>

                <FadeInRight>
                <p className="text-center lead">
                So happy Tommy's opened in Austin!!! What a great addition! Great pizza,
                 great customer service and great location!!! I highly reccomend this pizza place
                 as a local to the area. 
                </p>
                </FadeInRight>

            </RefferalWrapper>
     
            <SideBarWrapper >

                <SpanTitle>
                    PHONE
                </SpanTitle>
                123.456.7890
{/* 
                <SpanTitle>
                LOCATION
                </SpanTitle>
                2202 A West Alabama
                Houston, TX 77098
                Upper Kirby */}
               
                <SpanTitle>
                HOURS
                </SpanTitle>
               
                <HoursSpan>
                    <BoldSpan>Tue</BoldSpan> 11am-10pm <br/>
                

                    <BoldSpan>Wed</BoldSpan> 1am-10pm <br/>

                    <BoldSpan>Thur</BoldSpan> 11am-10pm <br/>

                    <BoldSpan>Fri</BoldSpan> 11am-11pm <br/>

                    <BoldSpan>Sat</BoldSpan> 11am-11pm <br/>

                    <BoldSpan>Sun</BoldSpan> 11am-10pm <br/>

                     <BoldSpan>Mon</BoldSpan> 5pm-10pm <br/>

                </HoursSpan>
                
               
                <SpanTitle>
                HAPPY HOUR
                </SpanTitle>
              
                    
                    
                    <HoursSpan>
                     <BoldSpan>Weekdays:</BoldSpan> <br/> 4pm–7pm 
                    </HoursSpan>
                    <HoursSpan>
                     <BoldSpan>Weekends:</BoldSpan> <br/>  9pm–close
                    </HoursSpan>
            </SideBarWrapper>
         
        </InfoWrapper>
    )
}

export default RestaurantInfo
