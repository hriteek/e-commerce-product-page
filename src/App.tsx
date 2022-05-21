import { useState } from 'react';

import NavBar from './components/navbar';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Model from './components/Model';
import Cart from './components/Cart';

import { useProductStore, useCartStore, IProduct } from './store/store';

function App() {
  const product: IProduct = useProductStore((state) => state.product);
  const cartProduct = useCartStore((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  function getCartCount() {
    let count = 0;
    cartProduct.forEach((each) => {
      count += each.count;
    });
    return count;
  }
  return (
    <>
      <div className='w-3/4 mx-auto'>
        <NavBar open={cartOpen} setOpen={setCartOpen} count={getCartCount()} />
        <Cart open={cartOpen} setOpen={setCartOpen} />
        <div className='flex my-20 justify-between items-center'>
          <Gallery setOpen={setOpen} />
          <Details />
        </div>
        <Model open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default App;
