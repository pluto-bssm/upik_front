import { ArrowLeft } from "lucide-react";
import styled from "styled-components";

interface Props {
    onClose: () => void;  
    onBack: () => void;        
  }

export default function VoteResult({onClose,onBack}:Props){

    return (
        <ModalOverlay>
            <ModalContent>
                <Title>경고</Title>
                <Description>
                    재투표 요청 버튼은 가이드에 잘못된 정보가 있어 수정이 필요한 경우 사용하는 버튼입니다.
                    운영자에게 재투표 요청을 보내시겠습니까?
                </Description>

                <ButtonContainer>
                    <YesButton onClick={onClose}>
                        네
                    </YesButton>
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
    background-color: white;
    border-radius: 8px;
    padding: 2.5rem;
    width: 600px;
    height: 253px;
`;

const Title = styled.h2`
    font-size: 2.25rem;
    font-weight: 600;
    color: black;
    margin-bottom: 0.75rem;
`;

const Description = styled.p`
    color: black;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 100px;
    padding-left: 20rem;
`;

const YesButton = styled.button`
    background-color: #0158DE;
    color: white;
    padding: 0.5rem 1.25rem;
    font-size: 1.125rem;
    border-radius: 100px;
`;

const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border: 1px solid #2563EB;
    color: #2563EB;
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
    border-radius: 100px;
`;


