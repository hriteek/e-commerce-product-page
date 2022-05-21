import { ReactComponent as DeleteIcons } from '../images/icon-delete.svg';

import {
  useCartStore,
  ICartProduct,
  useProductStore,
  IProduct,
} from '../store/store';
interface ICartProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Cart = (props: ICartProps) => {
  const cartProduct: ICartProduct[] = useCartStore((state) => state.cart);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);
  const clearItemsFromCart = useCartStore((state) => state.clearItemsFromCart);
  const product: IProduct = useProductStore((state) => state.product);
  return (
    <>
      {props.open && (
        <div className='absolute w-1/4 bg-white z-10 rounded-md shadow-lg right-20 p-4'>
          <h1 className='font-bold border-b'>Cart</h1>
          {cartProduct?.map((each, index) => (
            <div
              key={index}
              className='flex justify-between items-center border-b p-4'
            >
              <div className='flex items-center'>
                <img
                  className='w-10 h-10 rounded-md mr-4'
                  src={product.thumbnail[0]}
                  alt='product'
                />
                <div className='text-sm'>
                  <p className='text-gray-600'>{product.name}</p>
                  <p className='text-gray-600'>
                    ${product.price} x {each.count}
                    <strong> ${product.price * each.count}</strong>
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <DeleteIcons
                  className='cursor-pointer'
                  onClick={() => deleteFromCart(product.id)}
                />
              </div>
            </div>
          ))}
          <button
            onClick={() => {
              props.setOpen(false);
              clearItemsFromCart();
            }}
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
