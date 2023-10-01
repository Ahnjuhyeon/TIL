import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { styled } from "styled-components";

const Layout = () => {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </div>
  );
};
export default Layout;
const ContentWrapper = styled.div`
  padding: 100px 0;
`;
