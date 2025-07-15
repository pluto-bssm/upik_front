import { ArrowLeft } from "lucide-react";

import{
    ModalOverlay,
    ModalContent,
    Title,
    Description,
    ButtonContainer,
    YesButton,
    BackButton
} from "@/app/style/VoteResult";

interface Props {
    onClose: () => void;  
    onBack: () => void;        
  }

export default function VoteResult({onClose,onBack}:Props){

    return (
        <ModalOverlay>
            <ModalContent>
                <Title>안내</Title>
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
