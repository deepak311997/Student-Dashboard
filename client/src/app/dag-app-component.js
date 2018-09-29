import React from 'react';

import DAGAppHeader from './header/dag-header-component';

class App extends React.Component {
  render() {
    return (
      <div>
        <DAGAppHeader {...this.props} />
      </div>
    );
  }
}

export default App;
