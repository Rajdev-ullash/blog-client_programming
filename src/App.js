import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AllHome from "./Components/AllHome/AllHome";
import BlogDetails from "./Components/AllHome/Blog/BlogDetails/BlogDetails";
import CreateBlog from "./Components/AllHome/Blog/CreateBlog/CreateBlog";
import Dashboard from "./Components/AllHome/Dashboard/Dashboard";
import ManageBlog from './Components/AllHome/Blog/ManageBlog/ManageBlog'
import Login from "./Components/AllHome/Authentication/Login";
export const infocontext = createContext();

function App() {
  const [logged, setLogged] = useState();

  return (
    <infocontext.Provider value={[logged, setLogged]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <AllHome></AllHome>
          </Route>
          <Route path="/home">
            <AllHome></AllHome>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/createBlog">
            <CreateBlog></CreateBlog>
          </Route>
          <Route path="/blog/:_id">
            <BlogDetails></BlogDetails>
          </Route>
          <Route path="/manageblog">
            <ManageBlog></ManageBlog>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      </infocontext.Provider >
  );
}

export default App;
