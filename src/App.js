import Home from './Containers/Home';
import Header from './Components/Header';
import Champion from './Containers/Champion';
import Error404 from './Containers/Error404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ResetCss } from './Global/ResetCss';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ResetCss />
        <Header />
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
    </ThemeProvider>
  );
}

export default App;
