import { useState } from 'react';

import { ReactComponent as CartIcons } from '../images/icon-cart.svg';
import Button from './Button';
import Switch from './Switch';

import { useProductStore, useCartStore, IProduct } from '../store/store';

interface IDetailsProps {}

const Details = (props: IDetailsProps) => {
  const [count, setCount] = useState(0);
  const product: IProduct = useProductStore((state) => state.product);
  const addToCart = useCartStore((state) => state.addToCart);
  const handleCount = (op: string) => {
    setCount(() => {
      if (count >= 0) {
        if (op === '+') {
          return count + 1;
        } else if (count == 0) {
          return 0;
        } else {
          return count - 1;
        }
      }
      return 0;
    });
  };
  return (
    <>
      <div className='w-1/2'>
        <div className='w-3/4'>
          <p className='uppercase font-bold text-sm text-orange'>
            {product.title}
          </p>
          <h1 className='font-bold text-4xl mt-2 mb-4'>{product.name}</h1>
          <p className='text-grayish-blue'>{product.description}</p>
        </div>
        <div className='my-4'>
          <span className='font-extrabold'>
            $
            {(product.price - (product.discount / 100) * product.price).toFixed(
              2
            )}
          </span>
          <span className='mx-4 text-orange bg-orange-pale py-1 px-2 rounded-md font-bold'>
            {product.discount}%
          </span>
          <span className='block line-through text-grayish-blue-dark font-bold'>
            ${product.price}
          </span>
        </div>
        <div className='flex'>
          <Switch count={count} handler={handleCount} />
          <Button
            onClick={() => {
              addToCart(product.id, count);
              setCount(0);
            }}
            className='bg-orange text-white rounded-lg px-16 py-2 font-bold text-sm'
          >
            <span className='text-white'>
              <CartIcons className='inline-block mr-4 text-xm fill-white' />
            </span>
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default Details;
