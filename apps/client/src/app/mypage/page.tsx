"use client";

import React from "react";
import arrow from "@/app/images/arrow3.svg";
import {
  Container,
  Title,
  ContentBox,
  InfoContainer,
  NameForm,
  Name,
  Form,
  Button,
  ButtonForm,
  StyledArrowImage,
  ButtonSection,
  Buttonp,
  ButtonSub,
  ButtonContent
} from "../style/Mypage"

const name = "1134박기주";
const email = "24.013@bssm.hs.kr";

export default function Mypage() {
  return (
    <Container>
      <Title>마이페이지</Title>
      <ContentBox>
        <Form>
        <InfoContainer>
          <NameForm>
            <Name>{name}</Name>
            <p>{email}</p>
          </NameForm>
          <ButtonForm>
            <Button>
              <ButtonContent>
                <ButtonSection>
                <Buttonp>내가쓴 투표조회</Buttonp>
                <StyledArrowImage src={arrow} alt="checkimg"  width={30} height={30}/>
                </ButtonSection>
                <ButtonSub>내가 쓴 다양한 게시글을 볼 수 있어요!</ButtonSub>
              </ButtonContent>
            </Button>
            <Button>
            <ButtonContent>
                <ButtonSection>
                <Buttonp>신고조회</Buttonp>
                <StyledArrowImage src={arrow} alt="checkimg"  width={30} height={30}/>
                </ButtonSection>
                <ButtonSub>내가 신고한 게시물들과 상태를 볼 수 있어요!</ButtonSub>
              </ButtonContent>
            </Button>
          </ButtonForm>
        </InfoContainer>
        </Form>
      </ContentBox>
    </Container>
  );
}
