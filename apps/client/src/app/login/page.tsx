"use client";

import styled from "styled-components";
import color from "@/app/style/color";

export default function LoginPage() {
  return (
    <Container>
        <LogoBox>
            <Logo src="/logo.svg" alt="logo" />
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
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    width: 131px;
    height: 42px;
`;

const LogoText = styled.p`
    font-size: 16px;
    font-weight: 600;
    color:${color.gray800};

`;

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:40px;
`;

const GoogleLoginButton = styled.button`
    width: 350px;
    height: 44px;
    background-color: ${color.white};
    color: ${color.gray800};
    font-weight:bold;
    font-size:16px;
    border: 1px solid ${color.gray150};
    border-radius: 5px;
    cursor: pointer;
`;

const ExplainText = styled.p`
    font-size: 12px;
    margin-right:150px;
    margin-top:4px;
    font-weight: 600;
    color:${color.gray200};
`;
