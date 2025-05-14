import Login from "./jsx/defaultProps";

const App = () => {
  return (
    <div>
      <Login></Login>
    </div>
  );
};

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
