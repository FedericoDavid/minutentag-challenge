import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect';
import cors from 'cors'

import stockAndPrice from './stock-price';

export type Product = {
  stock: number
  price: number
}

export type ProductStockAndPrice = {
  [id: string]: Product;
}

const product: ProductStockAndPrice = stockAndPrice;

const handler = nc()
  .use(cors())
  .get((
    req: NextApiRequest,
    res: NextApiResponse<Product>
  ) => {
    const { code } = req.query;

    if (code) {
      const productByCode = product[code.toString()];

      if (!productByCode) {
        res.status(404);
        res.end();

        return;
      }

      res.status(200).json(productByCode);
    }
  });

export default handler;
