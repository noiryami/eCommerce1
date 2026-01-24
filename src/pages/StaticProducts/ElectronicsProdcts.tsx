
import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";

const electronicsProdcts = [
    {
        id: 1,
        title: "Smartphone",
        price: 699,
        cat_prefix: "electronics",
        img: "https://tse1.mm.bing.net/th/id/OIP.fqYkX-3b2b7Yk3KXo5f9WQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",  
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
];

const ElectronicsProdcts = () => {


  return (
    <>
      <Heading title={`Electronics Products`} />

        <GridList
          emptyMessage="there is no products"
          records={electronicsProdcts}
          renderIteam={(record) => <Product {...record} />}
        />

    </>
  );
};

export default ElectronicsProdcts;
