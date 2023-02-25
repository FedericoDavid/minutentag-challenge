import type { NextPage, NextPageContext } from 'next';
import productsData from '@/constants/pages/home/products';
import { ProductType } from '@/types/home';
import Head from 'next/head';

import ProductDetailContainer from '@/containers/ProductDetailContainer';

export const getServerSideProps = async ({ query }: NextPageContext) => {
    try {
        const { productId, productBrand } = query;

        const product = productsData.filter(
            prod => ((String(prod.id) === productId) && (prod.brand.toLowerCase() === productBrand?.toString().replace('-', ' ').toLowerCase()))
        );

        return {
            props: {
                product: product[0],
            },
        };
    } catch {
        return {
            notFound: true,
        };
    }
};

export type ProductDetailPageType = {
    product: ProductType,
}

const ProductDetailPage: NextPage<ProductDetailPageType> = ({ product }: ProductDetailPageType) => {
    const title = `${(product.brand)} | ${(product.style)}`;
    const description = product.information;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content='Beer, Beer Life, Brewery' />
            </Head>
            <ProductDetailContainer product={product} />
        </>
    );
};
export default ProductDetailPage;
