import styled from "styled-components";
import color from "@/app/style/color";

export const Container = styled.div`
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

export const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 131px;
    height: 42px;
`;

export const LogoText = styled.p`
    font-size: 16px;
    font-weight: 600;
    color:${color.gray800};

`;

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:40px;
`;

export const GoogleLoginButton = styled.button`
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

export const ExplainText = styled.p`
    font-size: 12px;
    margin-right:150px;
    margin-top:4px;
    font-weight: 600;
    color:${color.gray200};
`;
