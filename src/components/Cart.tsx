import { ReactComponent as DeleteIcons } from '../images/icon-delete.svg';

interface IProduct {
  name: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

interface ICartProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  products: IProduct[];
}

const Cart = (props: ICartProps) => {
  return (
    <>
      {props.open && (
        <div className='absolute w-1/4 bg-white z-10 rounded-md shadow-lg right-20 p-4'>
          <h1 className='font-bold border-b'>Cart</h1>
          {props.products?.map((product, index) => (
            <div
              key={index}
              className='flex justify-between items-center border-b p-4'
            >
              <div className='flex items-center'>
                <img
                  className='w-10 h-10 rounded-full mr-4'
                  src={product.thumbnail}
                  alt='product'
                />
                <div className='text-sm'>
                  <p className='font-bold'>{product.name}</p>
                  <p className='text-gray-600'>{product.price}</p>
                </div>
              </div>
              <div className='flex items-center'>
                <DeleteIcons />
              </div>
            </div>
          ))}
          <button
            onClick={() => props.setOpen(false)}
            className='bg-orange text-white w-full rounded-md py-2'
          >
            Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
