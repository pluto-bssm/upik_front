import styled from "styled-components";
import color from "@/app/style/color";

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
`;

export const ModalContent = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 2.5rem;
    width: 600px;
    height: 253px;
`;

export const Title = styled.h2`
    font-size: 2.25rem;
    font-weight: 600;
    color: black;
    margin-bottom: 0.75rem;
`;

export const Description = styled.p`
    color: black;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 100px;
    padding-left: 20rem;
`;

export const YesButton = styled.button`
    background-color: #0158DE;
    color: white;
    padding: 0.5rem 1.25rem;
    font-size: 1.125rem;
    border-radius: 100px;
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border: 1px solid #2563EB;
    color: #2563EB;
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
    border-radius: 100px;
`;


