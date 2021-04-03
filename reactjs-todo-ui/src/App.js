import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NewTodo from "./pages/todoviews/NewTodo";
import EditTodo from "./pages/todoviews/EditTodo";
import TodoList from "./pages/todoviews/TodoList";
import TopNavBar from "./component/TopNavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/todolist">
            <TodoList />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/newtodo">
            <NewTodo />
          </Route>
          <Route path="/edittodo">
            <EditTodo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
