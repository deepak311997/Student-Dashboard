import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import i18n from './lib/i18n';

import './app/dag-app.scss';
import DagHeaderRoutes from './app/route/dag-header-routes';

const store = configureStore();

i18n.init(() => {
  render(
    <Provider store={store}>
      <DagHeaderRoutes />
    </Provider>,
    document.querySelector('.dag-container')
  );
});
