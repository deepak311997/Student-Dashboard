  import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import i18n from './lib/i18n';

import './app/dag-app.scss';
import DAGMainComponent from './app/Main/dag-main-component';

i18n.init(() => {
  render(<DAGMainComponent />,document.querySelector('.dag-container'));
});
