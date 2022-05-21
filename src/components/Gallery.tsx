import { useState } from 'react';
interface IGalleryProps {
  setOpen: (open: boolean) => void;
}

import { useProductStore, IProduct } from '../store/store';

const Gallery = (props: IGalleryProps) => {
  const product: IProduct = useProductStore((state) => state.product);
  const [item, setItem] = useState(1);
  return (
    <div className='w-1/3'>
      <div className='mb-6'>
        <img
          onClick={() => props.setOpen(true)}
          className='rounded-lg cursor-pointer'
          src={product.image[item - 1]}
          alt='product'
        />
      </div>
      <div className='flex justify-between'>
        {product?.thumbnail?.map((thumbnail, index) => (
          <img
            className='w-16 h-16 rounded-md'
            src={thumbnail}
            alt="Product's thumbnail"
            onClick={() => setItem(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
