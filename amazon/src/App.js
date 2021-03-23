import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Login from "./Component/Login";
import { auth } from "./Component/Firebase";
import { useStateValue } from "./Component/StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
return (
  <div className="app">
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Home />
          <Login />
        </Route>
      </Switch>
    </Router>
    
  </div>
);
}
export default App;