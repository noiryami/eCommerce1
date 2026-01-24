
import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";


const BooksProducts = [
  {
    id: 4,
    title: "Classic Novel",
    price: 29,
    cat_prefix: "books",
    img: "https://tse1.mm.bing.net/th/id/OIP.Ll4U7G1RvzqroLeXpiypOwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
        max: 20,
    },
    {
        id: 5,
        title: "Science Fiction",
        price: 35,
        cat_prefix: "books",
        img: "https://th.bing.com/th/id/OIP.PJ0PyRXOXD-2gqlfs4RG-wHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        max: 15,
    },
    {
        id: 6,
        title: "Historical Fiction",
        price: 40,
        cat_prefix: "books",
        img: "https://tse1.mm.bing.net/th/id/OIP.8YkYJ3bXoG6bX3Wz4d7R5AHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
        max: 10,
    },
];



const BooksProudcts = () => {
  return (
    <>
      <Heading title={`Books Products`} />

        <GridList
          emptyMessage="there is no products"
          records={BooksProducts}
          renderIteam={(record) => <Product {...record} />}
        />
    </>
  );
};

export default BooksProudcts;
