import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import PapaParse from 'papaparse';
import Dropzone from 'react-dropzone';
import config from '../../config/dag-config';

const { basePath } = config.path;

class DAGUploadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
  }

  componentDidUpdate = () => this.handleUpload();

  handleUpload = () => {
    const { files } = this.state;

    if(files.length) {
      this.data = [];
      Object.keys(files).forEach((index) => {
        const file = files[index];
        const reader = new FileReader();

        reader.onload = () => {
          this.data.push({ 'fileName': file.name, content: PapaParse.parse(reader.result).data });
        };
        reader.readAsBinaryString(file);
      });
      axios.post('/api/upload', this.data[0].content).then(response => response.data).catch((error) => console.log(error));
    }
  };

  handleChange = (event) => {
    this.setState({ files: event.target.files });
  };

  onDrop = (files) => {
    this.setState({
      files,
    });
  };

  onCancel = () => {
    this.setState({
      files: [],
    });
  };

  closeUpload = () => {
    this.props.history.push(`${basePath}/apps`);
  };

  render() {
    const { files } = this.state;

    return(
        <div className='main-container'>
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            onFileDialogCancel={this.onCancel.bind(this)}
            disableClick={true}
            className='dropzone'
          >
            <p>Try dropping some files here</p>
          </Dropzone>
          <input
            id='contained-button-file'
            className='button'
            multiple={true}
            type='file'
            onChange={this.handleChange}
          />
          <label htmlFor='contained-button-file'>
            <Button className='button' variant='contained' color='primary' component='span'>
            Upload Files
            </Button>
          </label>
          <Button className='button' variant='contained' color='secondary' onClick={this.closeUpload.bind(this)}>Close Upload</Button>
          <div className='uploaded-files'>
            <h2>Uploaded files</h2>
            <ul>
              {
                Object.keys(files).map(index => <li key={files[index].name}>{files[index].name} - {files[index].size} Bytes</li>)
              }
            </ul>
          </div>
        </div>
    );
  }
}

DAGUploadComponent.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
};

export default DAGUploadComponent;
