import { ReactComponent as CartIcons } from '../images/icon-cart.svg';
import Avatar from '../images/image-avatar.png';

interface INavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NavBar = (props: INavbarProps) => {
  return (
    <>
      <nav className='flex justify-between h-20 items-center border-b'>
        <ul className='flex items-center'>
          <li className='font-extrabold text-2xl mr-6'>sneakers</li>
          <li className='mx-4 capitalize'>collections</li>
          <li className='mx-4 capitalize'>men</li>
          <li className='mx-4 capitalize'>woman</li>
          <li className='mx-4 capitalize'>about</li>
          <li className='mx-4 capitalize'>contact</li>
        </ul>
        <div className='flex'>
          <CartIcons
            onClick={() => props.setOpen(!props.open)}
            className='block self-center cursor-pointer'
          />
          <img className='w-10 h-10 ml-4' src={Avatar} alt='avatar' />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
