import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { IProduct } from "../components/Product";
import Footer from "../components/Footer";
import Head from "next/head";
interface IIndex {
  products: IProduct[]
}

const Index = (props: IIndex) => {
  return (
    <div className='app'>
      <Head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
      <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="OTc0MTRjYmMtMjVkNC00ZTYxLWI1MTEtM2UwMTg1OTljMzcxNjM2OTQ3NDcxNTIwMDc1NDU5"></script>
      <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
      </Head>
    <Header />
    <main className="main">
      <ProductList products={props.products} />
    </main>
    <Footer />
    </div>

  )
}

Index.getInitialProps = async ({ req }) => {
  return {
    products: [
      {id: 'first_kitten', name: 'kitten1', price: 100, description: 'A lovely kitten for you to purchase', image: 'http://placekitten.com/200/300'} as IProduct,
      {id: 'first_kitten', name: 'kitten1', price: 100, description: 'A lovely kitten for you to purchase', image: 'http://placekitten.com/200/300'} as IProduct,
      {id: 'first_kitten', name: 'kitten1', price: 100, description: 'A lovely kitten for you to purchase', image: 'http://placekitten.com/200/300'} as IProduct,
      {id: 'first_kitten', name: 'kitten1', price: 100, description: 'A lovely kitten for you to purchase', image: 'http://placekitten.com/200/300'} as IProduct,
      {id: 'first_kitten', name: 'kitten1', price: 100, description: 'A lovely kitten for you to purchase', image: 'http://placekitten.com/200/300'} as IProduct,
      {id: 'first_kitten', name: 'kitten1', price: 100, description: 'A lovely kitten for you to purchase', image: 'http://placekitten.com/200/300'} as IProduct,
    ]
  }
}

export default Index;
