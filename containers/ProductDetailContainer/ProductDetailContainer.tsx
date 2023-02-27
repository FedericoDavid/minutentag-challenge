import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ProductDetailContainerType, StockAndPriceType } from './types'
import Container from '@/components/Container';
import Header from '@/components/Header';
import { ClipLoader as Spinner } from 'react-spinners'
import { formatNumber } from '@/helpers/formatNumber';
import { Button, ButtonWrapper, Description, ImageWrapper, InfoWrapper, Price, Select, SpinnerWrapper, Stock, StockAndPriceWrapper, SubTitle, Title, Wrapper } from './styles';

const ProductDetailContainer = ({ product }: ProductDetailContainerType) => {
    const [stockAndPrice, setStockAndPrice] = useState<StockAndPriceType>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sku, setSku] = useState<number>();

    const { image, substyle, brand, origin, style, abv, information, skus } = product;

    const getStockAndPrice = useCallback(async (skuCode?: number) => {
        setIsLoading(true);

        try {
            if (skus) {
                return fetch(`/api/stock-price/${skuCode}`)
                    .then(data => data.json())
                    .then(res => setStockAndPrice(res))
                    .finally(() => setIsLoading(false));
            }
        } catch (e) {
            console.error(e);
            setIsLoading(false);
        }
    }, [sku]);

    const handleSkuOption = (e: any) => {
        e.preventDefault();
        const { value } = e.target;

        if (!value) return;

        getStockAndPrice(parseInt(value));
        setSku(parseInt(value));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getStockAndPrice(sku || parseInt(product.skus[0].code));
        }, 5000);

        return () => clearInterval(interval);
    }, [sku]);

    return (
        <>
            <Header />
            <Container>
                <Wrapper>
                    <ImageWrapper>
                        <Image src={`/images${image}`} alt="beer-image" priority fill style={{ objectFit: "contain" }} />
                    </ImageWrapper>
                    <InfoWrapper>
                        <Title>
                            {`${brand} | ${substyle}`}
                        </Title>
                        <SubTitle>
                            {`Origin: ${origin} | ${style.toUpperCase()} | ${abv}`}
                        </SubTitle>
                        <Select onChange={(e) => handleSkuOption(e)}>
                            {product.skus.map((s, i) => (
                                <option key={i} value={s.code}>{s.name}</option>
                            ))}
                        </Select>
                        <Description>
                            {information}
                        </Description>
                        <StockAndPriceWrapper>
                            {isLoading || !stockAndPrice ? (
                                <SpinnerWrapper>
                                    <Spinner color="#C3AC94" />
                                </SpinnerWrapper>
                            ) : (
                                <>
                                    <Stock>
                                        {`Stock: ${stockAndPrice.stock}`}
                                    </Stock>
                                    <Price>
                                        {formatNumber(stockAndPrice.price)}
                                    </Price>
                                </>
                            )}
                        </StockAndPriceWrapper>
                        <ButtonWrapper>
                            <Link href="/" passHref>
                                <Button>
                                    Go back
                                </Button>
                            </Link>
                        </ButtonWrapper>
                    </InfoWrapper>
                </Wrapper>
            </Container>
        </>
    )
};

export default ProductDetailContainer;