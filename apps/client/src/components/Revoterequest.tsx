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
} from "@/app/style/Revoterequest";
import { useMutation } from "@apollo/client";
import { REVOTE_REQUEST } from "@/app/api/query";

interface Props {
    onClose: () => void;
    onSubmit: () => void;
    voteId: string;
}

export default function Revoterequest({onClose, onSubmit, voteId}: Props){
    const [reportContent, setReportContent] = useState("");
    const [sendRevoteRequest, { loading, error }] = useMutation(REVOTE_REQUEST);

    const handleSubmit = async () => {
        try {
            await sendRevoteRequest({
                variables: {
                    id: voteId,
                    reason: reportContent,
                },
            });
            onSubmit();
        } catch (e) {
            alert("재투표 요청에 실패했습니다.");
        }
    };

    return(
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <div>
                    <Header>
                        <Siren size={38} />
                        <span>재투표 요청</span>
                    </Header>
                    <Label htmlFor="report">
                        재투표 요청 사유
                    </Label>
                    <TextArea
                        id="report"
                        value={reportContent}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReportContent(e.target.value)}
                        placeholder="재투표 요청 사유를 최대한 자세하게 작성해주세요."
                    />
                </div>

                <ButtonContainer>
                    <SubmitButton
                        onClick={handleSubmit}
                        disabled={!reportContent.trim() || loading}
                        isDisabled={!reportContent.trim() || loading}
                    >
                        요청 보내기 <Send size={18}/>
                    </SubmitButton>
                </ButtonContainer>
                {error && <div style={{color: 'red', marginTop: '1rem'}}>요청 중 오류가 발생했습니다.</div>}
            </ModalContent>
        </ModalOverlay>
    );
}