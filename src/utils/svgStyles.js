import styled from 'styled-components'

export const LinkWrapper = styled.div`

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

export const SocialIconWrapper = styled.div`

    padding: 0 1rem;
    font-size: 2.2rem;
    color: white;
    background-color: transparent;
    transition: all .2s;
    width: 8rem;
    height: 8rem;
    
    text-transform: uppercase;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    &:hover{
        background-color: #3B5988;
        transform: scale(1.1) translateY(-0.2rem);;
        cursor: pointer;
    }

    &:active{
       transform: scale(0.95) translateY(0.2rem);
    }

    &.Facebook:hover{
         background-color: #3B5988;
    }
    &.Facebook:active{
         background-color: #2a4063;
    }

    &.Twitter:hover{
         background-color: #1DA1F2;
    }

    &.Twitter:active{
         background-color: #188dd6;
    }
    &.Instagram:hover{
         background-color: #F56040;
    }
    &.Instagram:active{
         background-color: #d45437;
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