import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import auth from "./Firebase";
import Protected from "./routing/Protected";
import Login from "./components/Login";

import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard";
// import { useStateValue } from "./context/Auth/AuthState";

// import { Provider } from "./context";

const App = () => {
  // let history = useHistory();
  // const [user] = useState(false);

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       history.push("/");
  //       // console.log(authUser.displayName);
  //     } else {
  //       history.push("/sign-in");
  //     }
  //   });
  // });
  // const [{ user }, dispatch] = useStateValue;
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // });

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Register} />
          <Protected path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
