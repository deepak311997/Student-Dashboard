import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import config from '../../config/dag-config';

import App from '../dag-app-component';
import DAGStudentHome from '../Home/dag-student-home';

const basePath = config.path.basePath;

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
        <div className='align-body'>
          <App/>
          <Switch>
            <Route exact={true} path={`${basePath}/Home`} render={this.renderChild('Home', DAGStudentHome)}/>
            <Route render={() => <Redirect to={{
              pathname: `${basePath}/Home`,
              state: { activeView: 'Home' },
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
