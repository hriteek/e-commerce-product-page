import Product1 from '../images/image-product-1.jpg';
import Product2 from '../images/image-product-2.jpg';
import Product3 from '../images/image-product-3.jpg';
import Product4 from '../images/image-product-4.jpg';
import Product1Thumbnail from '../images/image-product-1-thumbnail.jpg';
import Product2Thumbnail from '../images/image-product-2-thumbnail.jpg';
import Product3Thumbnail from '../images/image-product-3-thumbnail.jpg';
import Product4Thumbnail from '../images/image-product-4-thumbnail.jpg';

interface IGalleryProps {
  item: number;
  setOpen: (open: boolean) => void;
  handleItem: (item: number) => void;
}

export const productObj = {
  1: Product1,
  2: Product2,
  3: Product3,
  4: Product4,
};

const Gallery = (props: IGalleryProps) => {
  const product = productObj[props.item];
  return (
    <div className='w-1/3'>
      <div className='mb-6'>
        <img
          onClick={() => props.setOpen(true)}
          className='rounded-lg cursor-pointer'
          src={product}
          alt='product'
        />
      </div>
      <div className='flex justify-between'>
        <img
          className='w-16 h-16 rounded-md'
          src={Product1Thumbnail}
          alt='Product1 thumbnail'
          onClick={() => props.handleItem(1)}
        />
        <img
          className='w-16 h-16 rounded-md'
          src={Product2Thumbnail}
          alt='Product2 thumbnail'
          onClick={() => props.handleItem(2)}
        />
        <img
          className='w-16 h-16 rounded-md'
          src={Product3Thumbnail}
          alt='Product3 thumbnail'
          onClick={() => props.handleItem(3)}
        />
        <img
          className='w-16 h-16 rounded-md'
          src={Product4Thumbnail}
          alt='Product4 thumbnail'
          onClick={() => props.handleItem(4)}
        />
      </div>
    </div>
  );
};

export default Gallery;
