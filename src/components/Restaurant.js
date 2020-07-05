import React from 'react'
import styled from 'styled-components'
import {FadeInSection} from '../utils/Fade_On_Scroll'

const Container = styled.div`

    width: 100%;
    height: auto;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('./images/italian_pizza/fine_ingredients.jpg');    
    background-size: cover;
    color: white;

`;

const TextSection = styled.div`

    width: 100%;
    padding: 2rem 4rem;
    margin-top: 3rem;
 


`;


const ImageDisplaySection = styled.div`

    width:  93%;

    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
    padding: 1rem 2rem; 
    @media only screen and (max-width: 760px) {

        flex-direction: column;

    }

`;

const FullImgWrapper = styled.div`

    width: 33%;
    flex: 1;
    @media only screen and (max-width: 760px) {
        width: 100%;
    }
    max-height: 65vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`;

const ImgContainer = styled.div`

    width: 100%;
    padding: 2rem;
    height: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    /* padding-bottom */

    &.img1 img{
        transition: all .5s;
    }
    
    &.img2 img{
        transition: all .5s;
    }

    &.img2-sm img{
        transition: all .5s;
    }
    &.img2-sm-chef img{
        transition: all .5s;
    }

    &.img3 img{
        transition: all .5s;
    }

    &.img1:hover img{
        transform: scale(1.7) rotate(30deg);
    }
        
    &.img2:hover img{

        transform: scale(1.7);

    }
    &.img2-sm-chef:hover img{

    transform: scale(1.1) translateX(8rem);

    }
    &.img2-sm:hover img{

    transform: scale(1.1);

    }
        
    &.img3:hover img{

        transform: scale(1.7) rotate(-30deg);

    }



`;






function Restaurant() {
    return (
            
        <Container className ="bg-light">
        <FadeInSection>
        <TextSection className = "border-bottom border-warning">
            <h1 className="text-center display-2 heading">Welcome to Tommy's</h1>
            <h3 className="text-center p-3 mt-5">Tommy's Pizza is home to Conroe's 
            original brickstone pizzeria and now we offer Detroit and New York style pizzas as well!
            All components of the food; dough, cheeses, sauces, are made fresh in-house daily.
            Dine-in or Carry-out, you can now order online.</h3>   
        </TextSection>
        </FadeInSection>
        <FadeInSection>
        <h1 className="text-center py-2 mt-4 heading">POPULAR PIE's</h1>
        </FadeInSection>

        <ImageDisplaySection>

            <FullImgWrapper>
            <h1 className="food-text text-center italic ">Labelle Pizza</h1>
            <ImgContainer className="img1 border border-warning">
                <img src="./images/italian_pizza/labelle_pizza_sm.jpg" className="imgcl" alt=""/>
            </ImgContainer>
            <p className="thin text-center">
            <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis vero quis inventore cupiditate consequuntur quos perferendis illum itaque at veritatis, reprehenderit suscipit, obcaecati nobis voluptates ullam totam beatae reiciendis.
            </p>
            </FullImgWrapper>
            
            <FullImgWrapper>
                <h1 className="food-text text-center italic">House Pepperoni</h1>
                <ImgContainer className="img2 border border-warning">
                <img src="./images/italian_pizza/pepperoni-pizza.jpg" className="imgcl" alt=""/>
                </ImgContainer>
                <p className="thin text-center">
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis vero quis inventore cupiditate consequuntur quos perferendis illum itaque at veritatis, reprehenderit suscipit, obcaecati nobis voluptates ullam totam beatae reiciendis.
            </p>
            </FullImgWrapper>
            <FullImgWrapper>
                <h1 className="food-text text-center italic">House Cheese</h1>
                <ImgContainer className="img3 border border-warning">
                <img src="./images/italian_pizza/cheese-pizza.jpg" className="imgcl" alt=""/>
                </ImgContainer>
                <p className="thin text-center">
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis vero quis inventore cupiditate consequuntur quos perferendis illum itaque at veritatis, reprehenderit suscipit, obcaecati nobis voluptates ullam totam beatae reiciendis.
            </p>
            </FullImgWrapper>
        </ImageDisplaySection>


        <ImageDisplaySection>
            <FullImgWrapper>
            <h1 className="food-text text-center heading">Fresh Interior</h1>
            <ImgContainer className="img1 border border-warning">
                <img width={600}src="./images/italian_pizza/fresh_location.jpg" className="imgcl" alt=""/>
            </ImgContainer>
            <p className="thin pt-2 text-center">
                <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum rem laborum hic minus id? Tempora ea neque nulla impedit doloremque ratione illo sint. Minima rerum necessitatibus nemo voluptas ad.
                </p>
            </FullImgWrapper>

            <FullImgWrapper>
                <h1 className="food-text text-center heading">Head Chef Tommy</h1>
                <ImgContainer className="img2-sm-chef border border-warning">
                <img src="./images/italian_pizza/baker.jpg" className="imgcl chef-img" alt=""/>
                </ImgContainer>
            </FullImgWrapper>

        </ImageDisplaySection>
        
        
        <FadeInSection>
        <ImageDisplaySection className="d-none d-sm-none d-md-flex">
            <FullImgWrapper style={{height:'auto', maxHeight:'85vh'}}>
                <h1 className="heading text-center">THE CREW</h1>
                <ImgContainer className="img2-sm border border-warning">
                <img width = {700} src="./images/italian_pizza/Kitchen_Staff.jpg" className="imgcl" alt=""/>
                </ImgContainer>
            </FullImgWrapper>
        </ImageDisplaySection>
        </FadeInSection>
        </Container>

    )
}

export default Restaurant
