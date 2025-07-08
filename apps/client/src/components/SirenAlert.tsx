import { ArrowLeft } from "lucide-react";
import styled from "styled-components";
import color from "@/app/style/color";

interface Props {
    onClose: () => void;  
    onBack: () => void;        
  }

export default function SirenAlert({onClose,onBack}:Props){

    return (
        <ModalOverlay>
            <ModalContent>
                <Title>경고</Title>
                <Description>
                    지속적으로 허위로 신고하는 경우 본인이 불이익을 받을 수 있습니다
                </Description>
                <ButtonContainer>
                    <ConfirmButton onClick={onClose}>
                        확인
                    </ConfirmButton>
                    <BackButton onClick={onBack}>
                        <ArrowLeft size={18} />
                        뒤로가기
                    </BackButton>
                </ButtonContainer>
            </ModalContent>
        </ModalOverlay>
    );
}

const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
`;

const ModalContent = styled.div`
    background-color: ${color.white};
    border-radius: 8px;
    padding: 2.5rem;
    width: 600px;
    height: 253px;
`;

const Title = styled.h2`
    font-size: 2.25rem;
    font-weight: 600;
    color: ${color.gray800};
    margin-bottom: 0.75rem;
`;

const Description = styled.p`
    color: ${color.gray800};
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-top: 2.5rem;
    padding-left: 20rem;
`;

const ConfirmButton = styled.button`
    background-color:  ${color.main};
    color:  ${color.white};
    padding: 0.5rem 1.25rem;
    font-size: 1.125rem;
    border-radius: 100px;
    transition: background-color 0.2s;

    &:hover {
        background-color:  ${color.main};
    }
`;

const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border: 1px solid  ${color.lightmain};
    color:  ${color.lightmain};
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
    border-radius: 100px;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${color.lightmain};
        color: ${color.white};
     }
`;