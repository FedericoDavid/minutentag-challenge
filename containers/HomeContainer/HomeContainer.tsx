import React from 'react'
import { HomeContainerType } from './types'

const HomeContainer = ({ products }: HomeContainerType) => {
    return (
        <div>
            {products.length > 0 && products.map((product) => (
                <p key={product.id}>{product.brand}</p>
            ))}
        </div>
    )
};

export default HomeContainer;