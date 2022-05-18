import { ReactComponent as CartIcons } from '../images/icon-cart.svg';
import Button from './Button';
import Switch from './Switch';

interface IDetailsProps {
  previousPrice: number;
  discount: number;
  count: number;
  handler: (n: string) => void;
}

const Details = (props: IDetailsProps) => {
  return (
    <div className='w-1/2'>
      <div className='w-3/4'>
        <p className='uppercase font-bold text-sm text-orange'>
          sneaker company
        </p>
        <h1 className='font-bold text-4xl mt-2 mb-4'>
          Fall Limited Edition Sneakers
        </h1>
        <p className='text-grayish-blue'>
          These low-profile sneakers are your prefect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className='my-4'>
        <span className='font-extrabold'>
          $
          {(
            props.previousPrice -
            (props.discount / 100) * props.previousPrice
          ).toFixed(2)}
        </span>
        <span className='mx-4 text-orange bg-orange-pale py-1 px-2 rounded-md font-bold'>
          {props.discount}%
        </span>
        <span className='block line-through text-grayish-blue-dark font-bold'>
          ${props.previousPrice}
        </span>
      </div>
      <div className='flex'>
        <Switch count={props.count} handler={props.handler} />
        <Button className='bg-orange text-white rounded-lg px-16 py-2 font-bold text-sm'>
          <span className='text-white'>
            <CartIcons className='inline-block mr-4 text-xm fill-white' />
          </span>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Details;
