import ChampionList from './Containers/ChampionList';
import Header from './Components/Header';
import Champion from './Containers/Champion';
import ItemList from './Containers/ItemList';
import Error404 from './Containers/Error404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ResetCss } from './Global/ResetCss';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './App.css';

function App() {
  const VERSION = '11.19.1';

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ResetCss />
        <Header />
        <Switch>
          <Route exact path="/">
            <ChampionList version={VERSION} />
          </Route>
          <Route path="/Champion/:name">
            <Champion version={VERSION} />
          </Route>
          <Route path="/Item">
            <ItemList version={VERSION} />
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
