import logo from './assets/images/logo.svg';
import './App.css';
import Header from "./header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header/>
      </Router>
    </>
  );
}

export default App;
