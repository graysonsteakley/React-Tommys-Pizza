

import styled from 'styled-components';
import SVGIcon from './SVGIcon';
import React from 'react'
import {NavLink, Match} from 'react-router-dom';
// import Logo from './Logo'
// import {NavLink, Match} from 'react-router-dom';

const NavWrapper = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 25vh;
    padding: 2rem;
    background-color: rgba(0,0,0,.6);


`;

const LinkWrapper = styled.div`

    padding: 0 1rem;
    font-size: 2.2rem;
    color: white;
    background-color: transparent;
    transition: all .2s;
    width: auto;
    text-transform: uppercase;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:hover{
        color: #B73239;
        background-color: whitesmoke;
        font-size: 2.4rem;
        font-weight: 700;
        letter-spacing: 1.05px;
        cursor: pointer;
        box-shadow: 0 2rem 10rem rgba(0,0,0,0.4);
    }

    &:active{
        color: #B73239;
        background-color: orange;
        font-size: 2.2rem;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
        box-shadow: 0 1rem 5rem rgba(0,0,0,0.4);
    }

`;


const covidModalShow = ()=>{
    var modal = document.getElementById("covid-modal");
    modal.style.display = "block";
};


const menuModalShow = ()=>{
    var modal = document.getElementById("menu-modal");
    modal.style.display = "block";
};


function NavBar() {
    return (
        <NavWrapper>
          
            {/* <Logo/> */}

      
            <LinkWrapper id="covid-btn" onClick={()=> covidModalShow()} className = "LinkWrapper d-none d-sm-flex">
                    <SVGIcon name="covid" width={100} fill={'#fff'} />
                    <span className = "heading">Covid-19 Update</span>
            </LinkWrapper>
            <NavLink exact = {true} to="/"  activeClassName = "active">
                <LinkWrapper className = "LinkWrapper">
                    {/* <NavLink exact = {true} to="/home" activeClassName = "active"> */}
                        <SVGIcon name="home" width={100} fill={'#fff'} />
                        <span className = "heading">Home</span>
                {/* </NavLink> */}
                </LinkWrapper>
            </NavLink>
            <NavLink exact = {true} to="/restaurant"  activeClassName = "active">
                <LinkWrapper className = "LinkWrapper">
                        <SVGIcon name="restaurant" width={100} fill={'#fff'} />
                        <span className = "heading">Restaurant</span>
                </LinkWrapper>
            </NavLink>
            <LinkWrapper onClick= {()=> menuModalShow()} className = "LinkWrapper d-none d-sm-flex">
                    <SVGIcon name="menu" width={100} fill={'#fff'} />
                    <span className = "heading">Menu</span>
            </LinkWrapper>
            <LinkWrapper className = "LinkWrapper d-none">
                    <SVGIcon name="reservation" width={100} fill={'#fff'} />
                    <span className = "heading">Reservations</span>
            </LinkWrapper>
            <a href="#join">
            <LinkWrapper className = "LinkWrapper d-none d-sm-flex">
                    <SVGIcon name="team" width={100} fill={'#fff'} />
                    <span className = "heading">Join our Team</span>
            </LinkWrapper>
            </a>
            <NavLink exact = {true} to="/order"  activeClassName = "active">
            <LinkWrapper className = "LinkWrapper">
                    <SVGIcon name="order" width={100} fill={'#fff'} />
                    <span className = "heading">Order Online</span>
            </LinkWrapper>
            </NavLink>
        </NavWrapper>
    )
}

export default NavBar
