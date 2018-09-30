import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import i18n from './lib/i18n';

import './app/dag-app.scss';
import DagHeaderRoutes from './app/route/dag-header-routes';

i18n.init(() => {
  render(<DagHeaderRoutes />,document.querySelector('.dag-container'));
});
