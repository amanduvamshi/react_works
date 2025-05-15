import Child from "./child";

const Parent = () => {
  const handleClick = () => {
    console.log("Parent clicked");
  };

  return (
    <div>
      <Child onclick={handleClick}></Child>
    </div>
  );
};

export default Parent;
