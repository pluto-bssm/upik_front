"use client";

import React, { useState } from "react";
import arrow from "@/app/images/arrow4.svg";
import arrow5 from "@/app/images/arrow5.svg";
import client from "../apolloClient";
import { useRouter } from "next/navigation";


import { useQuery } from "@apollo/client";
import { REPORT } from "../queries";



import {
  Container,
  Title,
  Sub,
  ContentBox,
  ListBox,
  ListItem,
  ListItemInner,
  ListTitle,
  ListInfo,
  DetailBox,
  DetailTitle,
  DetailInfo,
  DetailContent,
  DetailStatus,
  Images,
  BackButtonWrapper,
  BackArrowImage,
  DetailWrapper,
  CheckResultButton,
  TargetTitle,
  DetailREsonContent
} from "../style/report";

const name = "1134박기주";
const email = "24.013@bssm.hs.kr";



type Post = {
  reason  :String,
  createdAt : String,
  targetId : String,
  targetTitle : String,
  content : String

};



export default function Mypage() {
  const { loading, error, data } = useQuery(REPORT);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const router = useRouter() ;

  function gotoback(){
    router.push("/mypage")
  }
  if(data != null){
  
  }
  if(error){
  }
  if(loading){
    {
      return(
      <div>
        <ListTitle>로딩중</ListTitle>
      </div>
      )
    }
  }

  const reportdata = data?.report?.getMyReports || [];


  return reportdata ? (
    <Container>
      <BackButtonWrapper>
        <BackArrowImage src={arrow} alt="arrow" onClick={gotoback} />
        <Title>마이페이지</Title>
      </BackButtonWrapper>
      <Sub>신고기록 조회</Sub>
      <ContentBox>
        <ListBox>
          {reportdata.map((item: any) => (
            <ListItem
              key={item.targetId}
              onClick={() =>
                selectedPost?.targetTitle === item.targetTitle ? setSelectedPost(null) : setSelectedPost(item)
              }
              selected={selectedPost?.targetTitle === item.targetTitle}
            >
              <ListItemInner>
              <TargetTitle>{item.targetType}</TargetTitle>
                <ListTitle>{item.targetTitle}</ListTitle>
                <ListInfo>
                  <p>{item.authorName}</p>
                  <p>{item.createdAt}</p>
                </ListInfo>
              </ListItemInner>
            </ListItem>
          ))}
        </ListBox>
  
        {selectedPost && (
          <DetailBox>
            <DetailWrapper>
              <DetailTitle>{selectedPost.targetTitle}</DetailTitle>
              <DetailInfo>{selectedPost.createdAt} 제작</DetailInfo>
              <DetailContent>{selectedPost.content}</DetailContent>

              <DetailREsonContent>신고사유 : {selectedPost.reason}</DetailREsonContent>
              <CheckResultButton>
                결과확인하기
                <Images src={arrow5} alt="arrow" />
              </CheckResultButton>
            </DetailWrapper>
            <DetailStatus>현재 검토중인 질문입니다</DetailStatus>
          </DetailBox>
        )}
      </ContentBox>
    </Container>
  ) : null;
        }