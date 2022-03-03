import "./App.css";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import {Leftbar} from "./components/Leftbar";


function App() {
  return <div className="App">
    <Header/>
    <Leftbar/>
    <Landing/>
  
   
    </div>;
}

export default App;
