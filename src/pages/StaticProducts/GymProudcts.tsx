
import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";


const gymProudcts = [
    {
        id: 1,
        title: "Dumbbells Set",
        price: 50,
        cat_prefix: "gym",
        img: "https://tse2.mm.bing.net/th/id/OIP.MUjrLTGOdwP8mXjFaLDULQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        max: 30,
    },
    {
        id: 2,
        title: "Yoga Mat",
        price: 20,
        cat_prefix: "gym",
        img: "https://th.bing.com/th/id/OIP.2vXGZ6Y5bX8WJH1bF4m9TAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",   
        max: 50,
    },
    {   
        id: 3,
        title: "Resistance Bands",
        price: 15,
        cat_prefix: "gym",  
        img: "https://tse1.mm.bing.net/th/id/OIP.XxXoJtYk1bXoZ3Kc1q5YyAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        max: 40,
    },
];

const GymProudcts = () => {


  return (
    <>
      <Heading title={`Gym Products`} />
       <GridList
          emptyMessage="there is no products"
          records={gymProudcts}
          renderIteam={(record) => <Product {...record} />}
        />

    </>
  );
};

export default GymProudcts;
