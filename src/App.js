import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Showcase from './components/Showcase/Showcase';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          { routes.map(({ path, component }) => (
            <Route path={path}>
              {component}
            </Route>
          )) }
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
