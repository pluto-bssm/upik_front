"use client";

import logo from "@/app/images/logo.svg";
import {
    Container,
    LogoBox,
    Logo,
    LogoText,
    LoginBox,
    GoogleLoginButton,
    ExplainText
} from "@/app/style/Login";

export default function LoginPage() {
  return (
    <Container>
        <LogoBox>
            <Logo src={logo} alt="logo" />
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

