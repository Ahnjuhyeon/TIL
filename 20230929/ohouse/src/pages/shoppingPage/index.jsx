import PublicKategorie from "../../components/publicKategorie";
import Todaydeal from "../../components/todaydeal";
import PopularItem from "./components/popularItem";
import SlideBanner from "./components/slideBanner";

const ShoppingPage = () => {
  return (
    <>
      <SlideBanner />
      <Todaydeal />
      <PublicKategorie />
      <PopularItem />
    </>
  );
};
export default ShoppingPage;
