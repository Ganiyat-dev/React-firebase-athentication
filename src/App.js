import React, { Component } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
// function App() {
//   return (
//     <div className="App">
//       <Login Name="Ganiyat" />
//       <Register FirstName="Azeez" />
//     </div>
//   );
// }

class App extends Component {
  render() {
    const name = "Larry";

    return (
      <div className="App">
        <h1> The App Component</h1>
        <h4>Hello{name}</h4>
        <h4> 1+1 = {1 + 1} </h4>
        <Login />
        <Register />
      </div>
    );
  }
}
export default App;
