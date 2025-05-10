import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello, JSX!</h1>;
}

// Render the component inside the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
