import Home from './Containers/Home';
import Champion from './Containers/Champion';
import Error404 from './Containers/Error404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ResetCss } from './Global/ResetCss';

function App() {
  return (
    <div>
      <Router>
        <ResetCss />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Champion/:name">
            <Champion />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
