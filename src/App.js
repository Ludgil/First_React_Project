import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ToDoList from "./componants/ToDoList";
import NavBar from "./componants/NavBar";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ToDoList />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
