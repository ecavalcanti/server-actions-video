import { addProductToDatabase } from '@/actions/serverActions';
import AddProductButton from '@/components/AddProductButton';
import { Product } from '@/typings';

export default async function Home() {
  const res = await fetch('https://64e9ff8fbf99bdcc8e673059.mockapi.io/products', {
    cache: 'no-cache',
    next: {
      tags: ['products']
    }
  });

  const products: Product[] = await res.json();

  return (
    <main className="">
      <h1 className='text-3xl font-bold text-center'>Products Warehouse</h1>

      <AddProductButton />

      <form action={addProductToDatabase} className='flex flex-col gap-5 max-w-xl mx-auto p-5'>
        <input type="text"
          name='name'
          placeholder='Enter Product name...'
          className='border border-gray-300 p-2 rounded-md' />
        <input type="text"
          name='price'
          placeholder='Enter Price name...'
          className='border border-gray-300 p-2 rounded-md' />

        {/* <input type="image" formAction={submitImage} /> */}

        <button className='border bg-blue-500 text-white p-2 rounded-md'>Add Product</button>
      </form>

      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map(product => (
          <div key={product.id} className='p-5 shadow'>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
