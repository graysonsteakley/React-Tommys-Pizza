import React, {Component} from 'react'
import styled from 'styled-components'
import SVGIcon from './SVGIcon'
import {SocialIconWrapper} from '../utils/svgStyles'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import {LinkedInLoginButton} from 'react-social-login-buttons'


const FooterWrapper = styled.div`


    width: 100%;
    height: auto;
    background-image: linear-gradient(to right top, #2F4F4F, #153333);
    display: flex;
    justify-content: space-around;
    align-items: center;


`;

const InquiryFormWrapper = styled.div`
    border-right: 1px solid lightgray;

    display: flex;
        justify-content: center;
    align-items: center;
    width: 65%;
    height: 100%;
    
    >.login-form{
        width: 100%;
        max-width: 50rem;
        padding: 1.5rem;
        margin: auto;
        height: 100%;
    }


`;


const SocialMediaWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 100%;

    

    > svg path{
        fill: white;
    }

    >.icon-wrap{
        display: flex;

        @media only screen and (max-width: 760px) {

        flex-direction: column;

        }

    }

    >.Contact-info{
        margin-top: 2rem;
        color: grey;
    }

`;


class Footer extends Component {


    constructor(props) {
        super(props);
    
        this.state = {
          text: "",
          name: "",
          email: ""
        };
    
        this.onHandleChangeName = this.onHandleChangeName.bind(this);
        this.onHandleChangeEmail = this.onHandleChangeEmail.bind(this);

        this.onHandleSubmit = this.onHandleSubmit.bind(this);
      }



    onHandleChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }

    onHandleChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
     
      onHandleSubmit(e) {
        e.preventDefault();
        this.setState({
          email: '',
          name: ''
        });
        }

    render(){
    return (
    <FooterWrapper>
        
        <InquiryFormWrapper>
       
            <form  onSubmit={this.onHandleSubmit} className = "text-light login-form" >
                <h1 className = "font-weight-bold">Job Inquiries</h1>
                <h2 className = "text-center">And Additional Questions</h2>
                <FormGroup className= "pt-2">
                    {/* <Label>Full Name</Label> */}
                    <Input type="text" onChange={this.onHandleChangeName} value={this.state.name} placeholder="Full Name"/>
                </FormGroup>
                <FormGroup>
                    {/* <Label>Email</Label> */}
                    <Input type="email" onChange={this.onHandleChangeEmail} value={this.state.email} placeholder="Email"/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block mt-4 btn-hover" type="submit">Submit</Button>
            </form>
            <div class="d-flex p-2 flex-column text-light mr-1">
                <div className="text-center h1 pt-3">Or continue with your LinkedIn Account.</div>
                <LinkedInLoginButton   style = {{ fontSize: "4.5rem"}} className="mt-5 btn-hover"/>
            </div>

        </InquiryFormWrapper>



        <SocialMediaWrapper id="join">
            <div className="icon-wrap">
                <a href="https://facebook.com/" target="_blank" className="link">
                <SocialIconWrapper className="Facebook">
                    <SVGIcon name="facebook" width={100} fill={'#fff'} />
                </SocialIconWrapper>
                </a>
                <a href="https://instagram.com/" target="_blank" className="link">
                <SocialIconWrapper className="Instagram">
                <SVGIcon name="instagram" width={100} fill={'#fff'} />
                </SocialIconWrapper>
                </a>
                <a href="https://twitter.com/" target="_blank" className="link">
                <SocialIconWrapper className="Twitter">
                <SVGIcon name="twitter" width={100} fill={'#fff'} />
                </SocialIconWrapper>
                </a>
            </div>
            <div className="Contact-info d-none d-sm-block">
            Tommy's CONROE, 2202A W KENTUCKY ST, CONROE, TX, 99999, UNITED STATES 1237865187246172@TOMMYS.COM
            </div>

        </SocialMediaWrapper>
    </FooterWrapper>
    )
    }
}

export default Footer
