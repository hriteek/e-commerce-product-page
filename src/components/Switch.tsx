interface ISwitchProps {
  count: number;
  handler: (n: string) => void;
}
const Switch = (props: ISwitchProps) => {
  return (
    <>
      <div className='bg-grayish-blue-light mr-2 rounded-md'>
        <span
          className='inline-block cursor-pointer text-orange px-4 py-2 text-2xl font-semibold text-center'
          onClick={() => props.handler('-')}
        >
          -
        </span>
        <span className='inline-block px-4 py-2 text-xl font-semibold'>
          {props.count}
        </span>
        <span
          className='inline-block cursor-pointer text-orange px-4 py-2 text-2xl font-semibold text-center'
          onClick={() => props.handler('+')}
        >
          +
        </span>
      </div>
    </>
  );
};

export default Switch;
