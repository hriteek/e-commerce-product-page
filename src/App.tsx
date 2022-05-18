import { useState } from 'react';

import NavBar from './components/navbar';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Model from './components/Model';
import Cart from './components/Cart';

function App() {
  const [price, setPrice] = useState({
    previousPrice: 250,
    discount: 50,
  });
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(2);
  const handleItem = (item: number) => {
    setItem(item);
  };
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
      <div className='w-3/4 mx-auto'>
        <NavBar open={cartOpen} setOpen={setCartOpen}/>
        <Cart open={cartOpen} setOpen={setCartOpen} />
        <div className='flex my-20 justify-between items-center'>
          <Gallery setOpen={setOpen} item={item} handleItem={handleItem} />
          <Details
            previousPrice={price.previousPrice}
            discount={price.discount}
            count={count}
            handler={handleCount}
          />
        </div>
        <Model open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default App;
