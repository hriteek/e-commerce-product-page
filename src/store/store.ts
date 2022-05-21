import create from 'zustand';

export interface IProduct {
  id: number;
  title: string;
  name: string;
  description: string;
  discount: number;
  price: number;
  image: Array<string>;
  thumbnail: Array<string>;
}

interface ProductStore {
  products: IProduct;
}

export interface ICartProduct {
  id: number;
  productId: number;
  count: number;
}

interface CartStore {
  cart: ICartProduct[];
  addToCart: (product: IProduct) => void;
}

let productStore = (set, get) => ({
  product: {
    id: 1,
    title: 'sneaker company',
    name: 'First Limited Edition Sneakers',
    description:
      "These low-profile sneakers are your prefect casual wear companion.  Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    discount: 50,
    price: 250,
    image: [
      new URL('/image-product-1.jpg', import.meta.url).href,
      new URL('/image-product-2.jpg', import.meta.url).href,
      new URL('/image-product-3.jpg', import.meta.url).href,
      new URL('/image-product-4.jpg', import.meta.url).href,
    ],
    thumbnail: [
      new URL('/image-product-1-thumbnail.jpg', import.meta.url).href,
      new URL('/image-product-2-thumbnail.jpg', import.meta.url).href,
      new URL('/image-product-3-thumbnail.jpg', import.meta.url).href,
      new URL('/image-product-4-thumbnail.jpg', import.meta.url).href,
    ],
  },
});

let cartStore = (set, get) => ({
  cart: [
    {
      id: 1,
      productId: 1,
      count: 2,
    },
  ],
  addToCart: (productId: number, count: number) => {
    set((state: CartStore) => ({
      cart:
        state.cart.findIndex((each) => each.productId === productId) !== -1
          ? state.cart.map((each) =>
              each.productId === productId ? { ...each, count } : each
            )
          : [...state.cart, { id: state.cart.length + 1, productId, count }],
    }));
  },
  deleteFromCart: (productId: number) => {
    set((state: CartStore) => ({
      cart: state.cart.filter((each) => each.productId !== productId),
    }));
  },
  clearItemsFromCart: () => {
    set((state: CartStore) => ({
      cart: [],
    }));
  },
});

export const useProductStore = create(productStore);
export const useCartStore = create(cartStore);
