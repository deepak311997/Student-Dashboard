import React from 'react';
import LoadingComponent from './dag-loading-component';

class LoadingContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <LoadingComponent />;
  }
}

export default LoadingContainer;
