import { useSelector } from "react-redux";

const Counter = () => {
  const value= useSelector((store) => store.counter);

  return (
    <>
      <h2 className="p-2 text-3xl font-semibold text-center">
        Counter : {value}
      </h2>
    </>
  );
};
export default Counter;
