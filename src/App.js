import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter } from 'react-router-dom';
import ScrollIntoView from './utils/ScrollIntoView';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/global.scss';
import './styles/bootstrap.min.css';

// InputRange css
// import 'react-input-range/lib/css/index.css'

// Slick css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { store } from './store';
import Layout from './layout/Layout';
// import Showcase from './components/Showcase/Showcase';

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <ScrollIntoView>
          <Layout></Layout>
        </ScrollIntoView>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
