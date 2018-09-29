import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import config from '../../config/dag-config';

import App from '../dag-app-component';
import FilesView from '../files/dag-files-container';
import Overview from '../summary/dag-summary-component';
import RulesView from '../rules/dag-rules-view';
import VioltedRulesView from '../files/violatedRulesView/dag-violated-rules-component';
import SourceCodeView from '../files/sourceCodeView/dag-sourceCode-component';

const { basePath } = config.path;

class DagHeaderRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeView: 'overview' };
  }

  renderChild = (activeView, Component) => props => <Component onViewChange={this.setActiveView} activeView={activeView} {...props}/>

  setActiveView = (activeView) => {
    this.setState({ activeView });
  };

  render() {
    return (
      <Router>
        <div>
          <App activeView={this.state.activeView}/>
          <Switch>
            <Route exact={true} path={`${basePath}/overview`} render={this.renderChild('overview', Overview)} />
            <Route exact={true} path={`${basePath}/files`} render={this.renderChild('files', FilesView)} />
            <Route exact={true} path={`${basePath}/rules`} render={this.renderChild('rules', RulesView)} />
            <Route exact={true} path={`${basePath}/files/:filename`} render={this.renderChild('files', VioltedRulesView)} />
            <Route exact={true} path={`${basePath}/files/:filename/rule`} render={this.renderChild('files', SourceCodeView)} />
            <Route exact={true} path={`${basePath}/files/:filename/rule/:ViolationId`} render={this.renderChild('files', SourceCodeView)} />
            <Route render={() => <Redirect to={{
              pathname: `${basePath}/files`,
              state: { activeView: 'files' },
            }}
            />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default DagHeaderRoutes;
