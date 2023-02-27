import React from 'react'
import Card from '@/components/Card';
import Container from '@/components/Container';
import Header from '@/components/Header';
import { CardWrapper, Title } from './styles';
import { HomeContainerType } from './types'

const HomeContainer = ({ products }: HomeContainerType) => {
    return (
        <>
            <Header />
            <Container>
                <Title>Our Selection:</Title>
                <CardWrapper>
                    {products.length > 0 && products.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </CardWrapper>
            </Container>
        </>
    )
};

export default HomeContainer;