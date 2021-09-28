import React from 'react';
import Header from './Components/Header';

import ChampionList from './Containers/ChampionList';
import Champion from './Containers/Champion';
import ItemList from './Containers/ItemList';

import Error404 from './Containers/Error404';
import Select from './Components/Select';
import useFetch from './Hooks/useFetch';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ResetCss } from './Global/ResetCss';
import { ThemeProvider } from 'styled-components';
import { FILTER_VERSION } from './API';
import theme from './theme';
import './App.css';

function App() {
  const { data, request } = useFetch();
  const [version, setVersion] = React.useState('11.19.1');

  React.useEffect(() => {
    const { url, options } = FILTER_VERSION();
    request(url, options);
  }, [request]);

  if (data)
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <ResetCss />
          <Header />
          <Select
            name={'Versão'}
            id={version}
            value={version}
            setValue={setVersion}
            data={data}
          />
          <Switch>
            <Route exact path="/">
              <ChampionList version={version} />
            </Route>
            <Route path="/Champion/:name">
              <Champion version={version} />
            </Route>
            <Route path="/Item">
              <ItemList version={version} />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  return null;
}

export default App;
