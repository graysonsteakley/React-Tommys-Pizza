import React from 'react'
import styled from 'styled-components';



const LogoFlexContainer = styled.div`

    width: 10%;
    min-height: 10%;
    display: flex;
    justify-content: flex-start;


`;

const LogoContainer = styled.div`

    padding: 0;
    margin: 0 5rem 0 0;
    text-align: center;
    display: flex;
    justify-content: center;

    > img{

        height: 100%;
        width: 100%;
    }


    &:hover{
        background-color: forestgreen;
    }

`;


function Logo() {
    return (
        <LogoFlexContainer>
        <LogoContainer>
            <img src="./images/italian_pizza/pizza.jpg" alt="Pizza Logo"/>
        </LogoContainer>
        </LogoFlexContainer>
    )
}

export default Logo
