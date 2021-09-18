import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sign_in } from "./components/sign_in";
import { Sign_up } from "./components/sign_up";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">

          </Route>

          <Route exact path="/sign_in">
            <Sign_in />
          </Route>
          
          <Route exact path="/sign_up">
            <Sign_up />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
