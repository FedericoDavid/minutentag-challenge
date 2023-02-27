export type SkusType = {
    code: string
    name: string
}

export type ProductType = {
    id: number
    brand: string
    image: string
    style: string
    substyle: string
    abv: string
    origin: string
    information: string
    skus: SkusType[]
}

export type ProductsType = {
    products: ProductType[]
}