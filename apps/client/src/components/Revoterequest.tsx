import { Siren, Send } from "lucide-react";
import { useState, useEffect } from "react";
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
import { useRouter } from "next/navigation";

interface Props {
    onClose: () => void;
    onSubmit: () => void;
    voteId: string;
    guideId: string;
    category: string;
}

export default function Revoterequest({onClose, onSubmit, voteId, guideId, category}: Props){
    const [reportContent, setReportContent] = useState("");
    const [sendRevoteRequest, { loading, error }] = useMutation(REVOTE_REQUEST);
    const router = useRouter();

    const handleSubmit = async () => {
        await sendRevoteRequest({
            variables: {
                id: guideId,
                reason: reportContent,
            },
        });
        onSubmit();
    };
        
    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error]);

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
                    >
                        요청 보내기 <Send size={18}/>
                    </SubmitButton>
                </ButtonContainer>
                
            </ModalContent>
        </ModalOverlay>
    );
}