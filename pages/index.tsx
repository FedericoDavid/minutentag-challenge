import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeContainer from '@/containers/HomeContainer'
import productsData from '@/constants/pages/home/products'
import { ProductsType } from '@/types/home'

export type HomePageType = {
  products: ProductsType
}

const Home: NextPage<HomePageType> = () => (
  <>
    <Head>
      <title>The Brewery</title>
      <meta name="description" content="Minutentag NextJs Challenge" />
      <meta name="keywords" content='Beer, Beer Life, Brewery' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeContainer products={productsData} />
  </>
);

export default Home;

