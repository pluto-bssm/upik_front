"use client";

import styled from "styled-components";
import color from "@/styles/color";

export default function LoginPage() {
  return (
    <Container>
        <LogoBox>
            <Logo src="/logo.svg" alt="logo" width={100} height={100} />
            <LogoText>저희와 함께 색다른 정보들을 만나보세요.</LogoText>
        </LogoBox>
        <LoginBox>
        <GoogleLoginButton>
            google aouth
        </GoogleLoginButton>
        <ExplainText>
            재학생은 학교계정으로 로그인 해주세요.
        </ExplainText>
        </LoginBox>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

const LogoText = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
`;

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const GoogleLoginButton = styled.button`
    width: 100%;
    height: 50px;
    background-color: #4285F4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const ExplainText = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
`;
