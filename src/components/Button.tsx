interface IButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button = (props: IButtonProps) => {
  return (
    <>
      <button className={props.className}>{props.children}</button>
    </>
  );
};

export default Button;
