import useCategories from "@hooks/useCategories"
import { GridList, Heading } from "@components/common"
import { Category } from "@components/eCommerce"
import { Loading } from "@components/feedback"

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

const Categories = () => {
  const {loading,error,records}=useCategories();

  return (
  <>
    <Heading title="Categories"/>   
    <Loading  status={loading} error={error} type="category">
      <GridList emptyMessage="there is no categories"
          records={records} renderIteam={(record) => <Category {...record} />} />
      <GridList emptyMessage="there is no categories"
          records={catogories} renderIteam={(record) => <Category {...record} />} />
    </Loading>
       
  </>    
      
  )
}

export default Categories
