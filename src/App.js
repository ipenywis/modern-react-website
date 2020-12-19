import "./App.css";
import { HomePage } from "./containers/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/customer/access/:action"
            exact
            component={CustomerAccessPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
