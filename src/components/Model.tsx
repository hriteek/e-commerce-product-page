import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { ReactComponent as IconNext } from '../images/icon-next.svg';
import { ReactComponent as IconPrevious } from '../images/icon-previous.svg';
import { ReactComponent as IconClose } from '../images/icon-close.svg';
import Product1 from '../images/image-product-1.jpg';
import Product2 from '../images/image-product-2.jpg';
import Product3 from '../images/image-product-3.jpg';
import Product4 from '../images/image-product-4.jpg';
import Product1Thumbnail from '../images/image-product-1-thumbnail.jpg';
import Product2Thumbnail from '../images/image-product-2-thumbnail.jpg';
import Product3Thumbnail from '../images/image-product-3-thumbnail.jpg';
import Product4Thumbnail from '../images/image-product-4-thumbnail.jpg';

import { productObj } from './Gallery';

interface IModelProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Model = (props: IModelProps) => {
  const [item, setItem] = useState(1);

  const cancelButtonRef = useRef(null);

  const handleSwitchItem = (value: number) => {
    let arr = [1, 2, 3, 4];
    if (value == 0) {
      setItem(item - 1 < 1 ? arr.length : item - 1);
    } else {
      setItem(item + 1 > arr.length ? 1 : item + 1);
    }
  };

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={props.setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-50 transition-opacity' />
        </Transition.Child>
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative bg-transparent rounded-lg text-left transform transition-all sm:my-8 sm:max-w-lg sm:w-full'>
                <div
                  onClick={() => props.setOpen(false)}
                  className='cursor-pointer h-8 w-8 leading-8 rounded-full text-center absolute -top-3 -right-2'
                >
                  <IconClose className='hover:fill-orange' aria-hidden='true' />
                </div>
                <div
                  onClick={() => handleSwitchItem(0)}
                  className='cursor-pointer bg-white h-8 w-8 leading-8 rounded-full text-center absolute top-1/2 -left-2'
                >
                  <IconPrevious
                    className=' hover:fill-orange'
                    aria-hidden='true'
                  />
                </div>
                <div
                  onClick={() => handleSwitchItem(1)}
                  className='cursor-pointer bg-white h-8 w-8 leading-8 rounded-full text-center absolute top-1/2 -right-2'
                >
                  <IconNext className='hover:fill-orange' aria-hidden='true' />
                </div>
                <div className='bg-transparent'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 text-center'>
                      <div className=''>
                        <img
                          className='rounded-xl'
                          src={productObj[item]}
                          alt='product'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-around mt-4 mx-20'>
                  <img
                    className='w-16 h-16 rounded-md cursor-pointer'
                    src={Product1Thumbnail}
                    alt='Product1 thumbnail'
                    onClick={() => setItem(1)}
                  />
                  <img
                    className='w-16 h-16 rounded-md cursor-pointer'
                    src={Product2Thumbnail}
                    alt='Product2 thumbnail'
                    onClick={() => setItem(2)}
                  />
                  <img
                    className='w-16 h-16 rounded-md cursor-pointer'
                    src={Product3Thumbnail}
                    alt='Product3 thumbnail'
                    onClick={() => setItem(3)}
                  />
                  <img
                    className='w-16 h-16 rounded-md cursor-pointer'
                    src={Product4Thumbnail}
                    alt='Product4 thumbnail'
                    onClick={() => setItem(4)}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Model;
