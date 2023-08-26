'use server';

import { Product } from "@/typings";
import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (e: FormData) => {
  'use server';

  const name = e.get('name')?.toString();
  const price = e.get('price')?.toString();

  if (!name || !price) return;

  const newProduct: Product = {
    name,
    price,
  }

  await fetch('https://64e9ff8fbf99bdcc8e673059.mockapi.io/products', {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
      'Content-type': 'application/json'
    }
  })

  revalidateTag('products');
}
