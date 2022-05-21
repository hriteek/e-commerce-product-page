interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  return (
    <>
      <button onClick={props.onClick} className={props.className}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
