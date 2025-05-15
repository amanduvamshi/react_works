import { useState } from "react";
import Product from "./jsx/Product";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
  ]);

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      price: (products.length + 1) * 100,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <>
      <div>
        <h1> ProductList </h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Product onClick={addProduct}></Product>
      </div>
    </>
  );
};

/* import UserInfo from "./jsx/multipleStateEx";
import Parent from "./jsx/Parent";

const App = () => {
  return (
    <div>
      <Parent></Parent>
    </div>
  );
}; */
/* import Button from "./jsx/Button";
import Counter from "./jsx/useStateEx";

const App = () => {
  return (
    <>
      <Counter></Counter>
    </>
  );
}; */

/* const App = () => {
  return (
    <div>
      <Button label="Click Me" />
      <Button label="Submit" />
      <Button label="Cancel" />
      <Button label="Delete" />
      <Button label="Save" />
    </div>
  );
}; */

/* import ChildrenComponentEx from "./jsx/childrenComponentEx";
const App = () => {
  return (
    <ChildrenComponentEx>
      <p>Inside Card</p>
    </ChildrenComponentEx>
  );
};
 */
/* import Login from "./jsx/defaultProps";

const App = () => {
  return (
    <div>
      <Login></Login>
    </div>
  );
};
 */
/* import { Footer, Header, Main } from "./jsx/nestedComponent";

const App = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "lightyellow",
          color: "red",
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        <Header></Header>
      </div>
      <div
        style={{
          backgroundColor: "lightyellow",
          color: "red",
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        <Main></Main>
      </div>
      <div
        style={{
          backgroundColor: "lightyellow",
          color: "red",
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        <Footer></Footer>
      </div>
    </div>
  );
}; */

/* import Welcome from "./jsx/functionComponent";
import { Sum } from "./jsx/sum";

const getGreeting = () => "Hello World!"; */

/* function App() {
  let isLoggedIn = true;

  return (
    <>
      <Sum></Sum>
      <p>{isLoggedIn ? "Welcome Back" : "Please Login"}</p>
      <p>{getGreeting()}</p>
    </>
  );
} */

/* const App = () => <div className="box">Hello</div>; */

/*  const App = () => {

  return(
    <Welcome></Welcome>
  )
 }  */

export default App;
