import styled from "styled-components";
import color from "@/app/style/color";

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
    justify-content: center;
    z-index: 50;
`;

export const ModalContent = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 2.5rem;
    width: 600px;
    height: 20%;
`;

export const Title = styled.h2`
    font-size: 28px;
    font-weight: 600;
    color: ${color.gray800};
    margin-bottom: 0.75rem;
`;

export const Description = styled.p`
    color: ${color.gray800};
    margin-bottom: 1.5rem;
    font-size: 16px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 100px;
    padding-left: 397px;
`;

export const YesButton = styled.button`
    background-color: ${color.main};
    color: ${color.white};
    padding: 0.5rem 1.25rem;
    font-size: 14px;
    border: 1px solid ${color.main};
    border-radius: 100px;
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border: 1px solid ${color.main};
    color: ${color.main};
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
    border-radius: 100px;
`;



