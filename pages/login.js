import Head from "next/head";
import styled from "styled-components";
import { Button } from "@mui/material";
import { auth, provider, signInPopup } from "../firebase";

function Login() {
    const singIn = () => {
        signInPopup(auth, provider).catch(alert);
    };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
            <Logo src="https://static.cdnlogo.com/logos/w/29/whatsapp-icon.svg" />
            <Button onClick = {singIn} variant="outlined">በጎግል አካዉንቶ ይግቡ</Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    padding:100px;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 4px 14px -3px rgba(0,0,0,0.7);
`;

const Logo = styled.img`
width:200px;
height:200px;
margin-bottom:50px;
`;
