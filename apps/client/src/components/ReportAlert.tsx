import { Siren, Send } from "lucide-react";
import { useState } from "react";
import{
  ModalOverlay,
  ModalContent,
  Header,
  Label,
  TextArea,
  ButtonContainer,
  SubmitButton
} from "@/app/style/ReportAlert";

interface Props {
  onClose: () => void;
  onSubmit: () => void;
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

