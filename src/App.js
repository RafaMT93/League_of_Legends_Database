import Home from './Containers/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ResetCss } from './Global/ResetCss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ResetCss />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
