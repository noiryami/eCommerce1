
import { Heading, HomeGridList } from "@components/common";
import { HomeIteamCategory } from "@components/eCommerce";
import useHomeCategories from "@hooks/useHomeCategories";
import { HomeIteamProduct } from "@components/eCommerce";
import useHomeProducts from "@hooks/useHomeProducts";



const Home = () => {

  const { randomCategories } = useHomeCategories();
  const { randomProudcts } = useHomeProducts();
  
  return (
    <>
      <Heading title="Home" />
      <HomeGridList
        records={randomCategories}
        renderIteam={(category) => <HomeIteamCategory {...category} />}
        emptyMessage="No categories available"
      />
      <Heading title="Products" />
      <HomeGridList
        emptyMessage="there is no products"
        records={randomProudcts}
        renderIteam={(record) => <HomeIteamProduct {...record} />}
      />
    </>
  );
};

export default Home;
