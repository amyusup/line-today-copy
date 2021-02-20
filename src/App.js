import React from "react";
import {
  useHistory,
  Switch,
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import { Top, Detail } from "./pages";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Top />
          </Route>
          <Route exact path="/detail/:url">
            <Detail />
          </Route>
          <Route
            path="/masuk"
            component={() => {
              window.location.href =
                "https://access.line.me/oauth2/v2.1/login?loginState=FEVr6qaMc9TriE9bfOhZ5j&loginChannelId=1518712866&returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fscope%3Dopenid%2Bprofile%2Bfriends%2Bgroups%2Bmessage.write%2Btimeline.post%26response_type%3Dcode%26state%3DAAY3eXizlEg%26redirect_uri%3Dhttps%253A%252F%252Fapi.today.line.me%252Fwebapi%252Fauthcb%26client_id%3D1518712866#/";
              return null;
            }}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

function NotFound() {
  const history = useHistory();

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column vh-100">
        <h4 className="text-primary font-weight-bold">Line Today Copy</h4>
        <h1 className="font-weight-bold d-block text-black-50">
          404 Not Found
        </h1>

        <div className="d-flex align-items-center">
          Your page request may temporary moved or not available
          <button
            className="btn shadow-none p-0 text-primary ml-1 font-weight-bold pointer-event"
            onClick={() => history.replace("/")}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
