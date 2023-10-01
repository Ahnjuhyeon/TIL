import { useNavigate } from "react-router-dom";
import PublicKategorie from "../../components/publicKategorie";
import Todaydeal from "../../components/todaydeal";
import Banner from "./components/banner";
import ContentsBox from "./components/contentBox";
import SideBanner from "./components/sideBanner";
import TopKategorie from "./components/topKategorie";
import styled from "styled-components";

const MainPage = () => {
  const navigate = useNavigate();
  const onClickenterButton = () => {
    navigate("/list");
  };
  return (
    <MainWrapper>
      <button onClick={onClickenterButton}>입장!</button>
      <Banner />
      <SideBanner />
      <TopKategorie />
      <ContentsBox />
      <PublicKategorie />
      <Todaydeal />
    </MainWrapper>
  );
};
export default MainPage;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 1024px;
`;
