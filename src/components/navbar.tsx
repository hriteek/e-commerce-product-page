import { ReactComponent as CartIcons } from '../images/icon-cart.svg';

interface INavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  count: number;
}

const NavBar = (props: INavbarProps) => {
  return (
    <>
      <nav className='flex justify-between h-20 items-center border-b'>
        <ul className='flex items-center'>
          <li className='font-extrabold text-2xl mr-6'>
            <a href='#'>sneakers</a>
          </li>
          <li className='mx-4 capitalize'>
            <a href='#'>collections</a>
          </li>
          <li className='mx-4 capitalize'>
            <a href='#'>men</a>
          </li>
          <li className='mx-4 capitalize'>
            <a href='#'>woman</a>
          </li>
          <li className='mx-4 capitalize'>
            <a href='#'>about</a>
          </li>
          <li className='mx-4 capitalize'>
            <a href='#'>contact</a>
          </li>
        </ul>
        <div className='flex relative'>
          <CartIcons
            onClick={() => props.setOpen(!props.open)}
            className='block self-center cursor-pointer'
          />
          <span className='absolute bg-orange w-4 h-4 rounded-full text-white text-center leading-4 text-sm right-12'>
            {props.count}
          </span>
          <img
            className='w-10 h-10 ml-4'
            src='/image-avatar.png'
            alt='avatar'
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
