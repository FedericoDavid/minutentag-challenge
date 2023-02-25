import React, { useEffect, useState } from 'react'
import { ProductType } from '@/types/home';
import { ProductDetailContainerType } from './types'

const ProductDetailContainer = ({ product }: ProductDetailContainerType) => {
    const [productDetail, setProductDetail] = useState<ProductType>();

    const getStockAndPrice = async () => {
        try {
            const { skus } = product;
            if (skus) {
                const promises = skus && skus?.map(sku => fetch(`/api/stock-price/${sku.code}`));

                return Promise.all(promises)
                    .then(res => Promise.all(res.map(data => data.json())))
                    .then(stockAndPrice => {
                        const updatedSkus = skus.map((sku, i) => {
                            return { ...sku, existence: stockAndPrice[i] };
                        });

                        const updatedProduct = { ...product, skus: updatedSkus };

                        setProductDetail(updatedProduct);
                    })
            }
        } catch (e) {
            console.error(e);
        }
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         getStockAndPrice();
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        getStockAndPrice()
    }, []);

    return (
        <div>
            {product.brand}
        </div>
    )
};

export default ProductDetailContainer;