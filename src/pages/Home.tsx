
import { Heading, HomeGridList } from "@components/common";
import { HomeIteamCategory } from "@components/eCommerce";
// import useHomeCategories from "@hooks/useHomeCategories";
import { HomeIteamProduct } from "@components/eCommerce";
// import useHomeProducts from "@hooks/useHomeProducts";

const catogories = [
  {
    id: 1,
    title: "electronics",
    prefix: "electronics",
    img: "https://static.vecteezy.com/system/resources/previews/027/012/214/non_2x/premium-electronic-electrical-logo-design-template-vector.jpg",
  },
  {
    id: 2,
    title: "gym tools",
    prefix: "gym",
    img: "https://tse2.mm.bing.net/th/id/OIP.MUjrLTGOdwP8mXjFaLDULQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3  ",
  },
  {
    id: 3,
    title: "Books",
    prefix: "books",
    img: "https://th.bing.com/th/id/OIP.PJ0PyRXOXD-2gqlfs4RG-wHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const proudcts = [
  {
    id: 1,
    title: "Regular Fit Jersey top",
    price: 249,
    cat_prefix: "men",
    img: "https://tse3.mm.bing.net/th/id/OIP.-IFrYBEaHLeVt_yLKPgPdwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    max: 4,
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199,
    cat_prefix: "electronics",
    img: "https://tse2.mm.bing.net/th/id/OIP.WGOZNjuNIvkVixSj9rQBcAHaIs?rs=1&pid=ImgDetMain&o=7&rm=3",
    max: 10,
  },
  {
    id: 3,
    title: "Wireless Headphones",
    price: 99,
    cat_prefix: "electronics",
    img: "https://th.bing.com/th/id/R.c302f932594bb77e5dc1fec118003d83?rik=VHXvfuSxTAZb3Q&pid=ImgRaw&r=0",
    max: 15,
  },
  {
    id: 4,
    title: "Classic Novel",
    price: 29,
    cat_prefix: "books",
    img: "https://tse1.mm.bing.net/th/id/OIP.Ll4U7G1RvzqroLeXpiypOwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    max: 20,
  },
];


const Home = () => {

  // const { randomCategories } = useHomeCategories();
  // const { randomProudcts } = useHomeProducts();
  
  return (
    <>
      <Heading title="Home" />
        {/* <HomeGridList
          records={randomCategories}
          renderIteam={(category) => <HomeIteamCategory {...category} />}
          emptyMessage="No categories available"
        /> */}
      <HomeGridList
        records={catogories}
        renderIteam={(category) => <HomeIteamCategory {...category} />}
        emptyMessage="No categories available"
      />
      <Heading title="Products" />
      {/* <HomeGridList
        emptyMessage="there is no products"
        records={randomProudcts}
        renderIteam={(record) => <HomeIteamProduct {...record} />}
      /> */}
      <HomeGridList
        records={proudcts}
        renderIteam={(record) => <HomeIteamProduct {...record} />}
        emptyMessage="there is no products"
      />
    </>
  );
};

export default Home;
