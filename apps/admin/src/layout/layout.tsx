/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import color from "@/style/color";
import { ApolloProvider } from "@apollo/client";
import client from "@/libs/apolloClient";

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <StyledLayout>
            <ApolloProvider client={client}>{children}</ApolloProvider>
        </StyledLayout>
    );
};

export default Layout;

const StyledLayout = styled.div`
  width: 242px;
  height: 100vh;
  background: ${color.gray800};
`;