'use client';
import '@/app/globals.css';
import { ReactNode } from 'react';
import Sidebar from '@/components/SideBar';
import styled from '@emotion/styled';
import color from '@/style/color';
import ApolloClientProvider from '../components/ApolloClientProvider';

type Props = {
    children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
    return (
        <html lang="ko">
        <body>
        <ApolloClientProvider>
            <LayoutWrapper>
                <Sidebar />
                <Main>{children}</Main>
            </LayoutWrapper>
        </ApolloClientProvider>
        </body>
        </html>
    );
};

export default RootLayout;

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  background: ${color.light};
  padding: 32px;
  overflow-y: auto;
`;