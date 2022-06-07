import { Component } from "react";
import ForwardRefParentInput from "./components/ForwardRefParentInput";

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <ForwardRefParentInput/>
      </div>
    );
  }
}
 
export default App;
