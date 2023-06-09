import React,{useState} from "react"
import styled from "styled-components"
import {BsFacebook, BsTwitter, BsGoogle} from "react-icons/bs"

const Home = () => {
	const [Name, setName] = useState(" ")
	const [Email, setEmail] = useState(" ")
	const [Password, setPassword] = useState(" ")
	const [Confirm, setConfirm] = useState(" ")

	console.log(Name)
	console.log(Email)
	console.log(Password)
	console.log(Confirm)
  return(
    	<Div>
        	<Card>
            	<Wrapper>

					<H2>Create an Account</H2>
					<H5>Sign up with your social media account or email address</H5>
					<Socialmedia>
						<Facebook><BsFacebook/>Facebook</Facebook>
						<Twitter><BsTwitter/>Twitter</Twitter>
						<Google><BsGoogle/>Google</Google>
					</Socialmedia>
					<Form>
						<Line></Line>
						<Circle><b>or</b></Circle>
						<Line></Line>
					</Form>
					<Input placeholder="Username" value={Name} onChange={(e) => {
						setName(e.target.value)
					}}/>
					<Input placeholder="Email Address" value={Email} onChange={(e) => {
						setEmail(e.target.value)
					}}/>
					<Input placeholder="Password" value={Password} onChange={(e) => {
						setPassword(e.target.value)
					}}/>
					<Input placeholder="confirm Password" value={Confirm} onChange={(e) => {
						setConfirm(e.target.value)
					}}/>
					<Button>Sign Up</Button>

            	</Wrapper>
            </Card>
    </Div>
  )
};

export default Home;


const Div = styled.div`
font-style: sans-serrif;
color: black;
background-color: gainsboro;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;
const Card = styled.div`
font-style: sans-serrif;
color: black;
background-color: white;
width: 38%;
height: 95%;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
// background-color: gold;
width: 85%;
height: 95%;
`;
const H2 = styled.div`
color: black;
font-size: 30px;
margin-top: 18px;
display: flex;
justify-content: center;
align-items: center;
`;
const H5 = styled.div`
color: grey;
margin-top: 10px;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
`;
const Socialmedia = styled.div`
width: 100%;
margin-top: 30px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 15px;
cursor: pointer;
`;
const Facebook = styled.div`
width: 100px;
font-size: 15px;
padding: 0.7rem;;
border-radius: 50px;
background-color: blue;
color: white;
display: flex;
justify-content: space-around;
align-items: center;
`;
const Twitter = styled.div`
width: 90px;
font-size: 15px;
padding: 0.7rem;
border-radius: 50px;
background-color: lightblue;
color: white;
display: flex;
justify-content: space-around;
align-items: center;
`;
const Google = styled.div`
width: 100px;
font-size: 15px;
padding: 0.7rem ;
border-radius: 50px;
background-color:red;
color: white;
display: flex;
justify-content: space-around;
align-items: center;
`;
const Form = styled.div`
width: 100%;
height: 50px;
margin-top: 20px;
margin-bottom: 10px;
background-color: transparent;
display: flex;
justify-content: space-around;
align-items: center;
`;
const Line = styled.div`
width: 46%;
border: 1px solid grey;
`;
const Circle = styled.div`
width: 40px;
height: 40px;
border: 1px solid grey;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
`;
const Input= styled.input`
width: 95%;
padding: 0.6rem;
border: 1px solid grey;
border-radius: 50px;
margin-top: 12px;
font-size: 15px;
background-color: transparent;
outline: none;
color: black;
`;
const Button= styled.button`
width: 100%;
padding: 0.7rem;
border: 1px solid green;
border-radius: 50px;
margin-top: 20px;
background-color: green;
color: white;
font-size: 18px;
cursor: pointer;
`;