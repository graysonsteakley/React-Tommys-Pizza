import styled from 'styled-components'

export const CovidModal = styled.div`

    padding-top: 5rem;
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    overflow: auto; 
    /* allow scrolling  */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.5); /* Black w/ opacity */

    >.modal-content{
        background-color: #red;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 4rem;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
        height: auto;

        >.close {
            color: black;
            float: left;
            font-size: 28px;
            font-weight: bold;
            width: 10%;
            transition: all 0.2s;
        }

        >.close:hover,
        >.close:focus {
            color: red;
            text-decoration: none;
            cursor: pointer;
            transform: scale(1.1) translateY(-.2rem);
        }

        >.close:active {
            color: darkred;
            text-decoration: none;
            cursor: pointer;
            transform: scale(1.05) translateY(.1rem);
        }


    }


`;


export const MenuModal = styled.div`

    padding-top: 2rem;
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    overflow: auto; 
    /* allow scrolling  */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.6); /* Black w/ opacity */

    /* >.modal-content{
        background-image: url('./images/italian_pizza/Menu.jpg');
        background-size: cover;
        margin: 10% auto; /* 15% from the top and centered */
        /*padding: 4rem;
        border: 1px solid #888;
        width: 100%; /* Could be more or less, depending on screen size 
        height: 150%; */
        >img{
            margin-left: 5rem;
            width: 44.8rem;
            height: 60rem;
        }

        >.close {
            position: fixed;
            top: 0;
            left: 0;
            color: pink;
            float: left;
            margin-left: 10rem;
            font-size: 20rem;
            font-weight: bold;
            width: 10%;
            transition: all 0.2s;
        }

        >.close:hover,
        >.close:focus {
            color: orangered;
            text-decoration: none;
            cursor: pointer;
            transform: scale(1.1) translateY(-.2rem);
        }

        >.close:active {
            color: darkred;
            text-decoration: none;
            cursor: pointer;
            transform: scale(1.05) translateY(.1rem);
        }

/* 
    } */


`;
