import { Siren, Send } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";
import color from "@/styles/color";

interface Props {
    onClose: () => void;
    onSubmit: () => void;
}

interface SubmitButtonProps {
  isDisabled: boolean;
}

export default function ReportAlert({onClose, onSubmit}: Props){
    const [reportContent, setReportContent] = useState("");

    return(
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <div>
                    <Header>
                        <Siren size={28} />
                        <span>신고</span>
                    </Header>
                    <Label htmlFor="report">
                        신고 사유
                    </Label>
                    <TextArea
                        id="report"
                        value={reportContent}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReportContent(e.target.value)}
                        placeholder="신고사유를 최대한 자세하게 작성해주세요."
                    />
                </div>
        
                <ButtonContainer>
                    <SubmitButton
                        onClick={onSubmit}
                        disabled={!reportContent.trim()}
                        isDisabled={!reportContent.trim()}
                    >
                        신고 보내기 <Send size={18}/>
                    </SubmitButton>
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
  border-radius: 0.75rem;
  width: 770px;
  height: 359px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2.25rem;
  font-weight: 600;
  color: ${color.gray800};
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${color.gray800};
  margin-bottom: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  border: 1px solid ${color.gray200};
  border-radius: 0.375rem;
  padding: 0.75rem;
  resize: none;
  font-size: 0.875rem;
  color: ${color.gray200};
  &:focus {
    outline: none;
    ring: 2px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button<SubmitButtonProps>`
  background-color: ${color.main};
  color: ${color.white};
  font-size: 0.875rem;
  padding: 0.5rem 1.5rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
  cursor: ${(props: SubmitButtonProps) => props.isDisabled ? 'not-allowed' : 'pointer'};
`;
