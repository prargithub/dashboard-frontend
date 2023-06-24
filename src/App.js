import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
// import Error from "./views/Error";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          {/* 
        
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/complaints/:id">
          <ComplaintDetails />
        </Route>
        <Route path="*">
          <Error />
        </Route> */}
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
