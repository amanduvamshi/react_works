import Welcome from "./jsx/functionComponent";
import { Sum } from "./jsx/sum";

const getGreeting = () => "Hello World!";

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

 const App = () => {

  return(
    <Welcome></Welcome>
  )
 } 


export default App;
