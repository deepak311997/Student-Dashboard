import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import config from '../../config/dag-config';

import App from '../dag-app-component';
import StudentHome from '../Home/dag-student-home';

const basePath = config.path;

class DagHeaderRoutes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className='align-body'>
          <App/>
          <Switch>
            <Route exact={true} component={StudentHome} path={`${basePath}/Home`}/>
            <Route exact={true} component={StudentHome} path={`${basePath}/Personal-Details`}/>
            <Route exact={true} component={StudentHome} path={`${basePath}/Attendence`}/>
            <Route exact={true} component={StudentHome} path={`${basePath}/Internals`}/>
            <Route render={() => <Redirect to={{
              pathname: `${basePath/Home}`
            }} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default DagHeaderRoutes;
