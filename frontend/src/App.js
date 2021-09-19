import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sign_in } from "./components/sign_in";
import { Sign_up } from "./components/sign_up";
import { Discussion_display } from "./components/discussion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
var posts=[['date', 'post 1 heading', 'post 1 content', 'author'],
  ['date', 'post 2 heading', 'post 2 content', 'author'],
  ['date', 'post 3 heading', 'post 3 content', 'author'],
  ['date', 'post 4 heading', 'post 4 content', 'author'],
]
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">

          </Route>

          <Route exact path="/discussion">
            <Discussion_display posts={posts} />
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
