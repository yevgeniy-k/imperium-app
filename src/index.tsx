// @ts-ignore-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ApolloProvider } from '@apollo/react-common';
import GqlClient from 'shared/gql/GqlClient';


const render = (Component: any) => {
  // eslint-disable-next-line react/no-render-return-value
  return ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={GqlClient}>
        <Component />
      </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
  );
};

render(App);

// @ts-ignore
if (module.hot) {
  console.log('hot!');
  // @ts-ignore
  module.hot.accept();
  // @ts-ignore
  // module.hot.accept('./App', () => {
  //   console.log('hotter!');
  //   const NextApp = require('./App').default;
  //   render(NextApp);
  // })
}

// Unregister the CRA service worker - we're going to rely on normal browser caching for now.
