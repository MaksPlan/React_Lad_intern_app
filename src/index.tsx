import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom';
import PageLayout from './layouts/PageLayout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <Router>
      <PageLayout>
        <App />
      </PageLayout>
      ,
    </Router>
  </Provider>

  // <Provider store={store}>
  //   <Router>
  //     <App />
  //   </Router>
  // </Provider>,
);
