import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/global.scss';
import './styles/bootstrap.min.css';

import { store } from './store';
import Layout from './layout/Layout';
// import Showcase from './components/Showcase/Showcase';

function App() {
  // return (
  //   <div style={{ backgroundColor: "#ddd", zIndex: -2 }}>
  //     <Showcase></Showcase>
  //   </div>
  // );
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
