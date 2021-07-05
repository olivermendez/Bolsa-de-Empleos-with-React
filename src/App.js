import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/" component={Home}></Route>

          <Route exact path="/jobs" component={Jobs}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
