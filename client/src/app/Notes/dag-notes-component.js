import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';

const URLS = [
  {
    subject: '15CS71',
    subjectFullName: 'Web Technology',
    modules: [
      'Introduction to HTML',
      'HTML Tables and forms',
      'Javascript',
      'PHP',
      'Frameworks'
    ],
    urls: [
      'https://drive.google.com/open?id=1hU1AYOd5vKZe8Q996GDRTeZ904716lwP',
      'https://drive.google.com/open?id=10YvkflXqDWb0S9yjGEdfQ6KqBFkcBOR8',
      'https://drive.google.com/open?id=1yPgazdPmxKhC5ZMP3UgPKhtMDloAa5tC',
      'https://drive.google.com/open?id=1eepx_Aweih3IOQEzjpwI3Ar_sbArIi-N',
      'https://drive.google.com/open?id=1yJ8TeFGF_qZhwXR7R2-D7QTOkGiZLxBE'
    ],
  },
  {
    subject: '15CS72',
    subjectFullName: 'Advanced Computer Architecture',
    modules: [
      'Theory of Parallelism',
      'Hardware Technologies',
      'Shared Memory',
      'Parallel and Scalable Architecture',
      'Software for Parallel Programming'
    ],
    urls: [
      'https://drive.google.com/open?id=1hU1AYOd5vKZe8Q996GDRTeZ904716lwP',
      'https://drive.google.com/open?id=10YvkflXqDWb0S9yjGEdfQ6KqBFkcBOR8',
      'https://drive.google.com/open?id=1yPgazdPmxKhC5ZMP3UgPKhtMDloAa5tC',
      'https://drive.google.com/open?id=1eepx_Aweih3IOQEzjpwI3Ar_sbArIi-N',
      'https://drive.google.com/open?id=1yJ8TeFGF_qZhwXR7R2-D7QTOkGiZLxBE'
    ],
  },
  {
    subject: '15CS73',
    subjectFullName: 'Machine Learning',
    modules: [
      'Introduction to Machine Learning',
      'Decision Tree Learning',
      'Artificial Neural Networks',
      'Bayesian Learning',
      'Evaluating Hypothesis'
    ],
    urls: [
      'https://drive.google.com/open?id=1hU1AYOd5vKZe8Q996GDRTeZ904716lwP',
      'https://drive.google.com/open?id=10YvkflXqDWb0S9yjGEdfQ6KqBFkcBOR8',
      'https://drive.google.com/open?id=1yPgazdPmxKhC5ZMP3UgPKhtMDloAa5tC',
      'https://drive.google.com/open?id=1eepx_Aweih3IOQEzjpwI3Ar_sbArIi-N',
      'https://drive.google.com/open?id=1yJ8TeFGF_qZhwXR7R2-D7QTOkGiZLxBE'
    ],
  },
  {
    subject: '15CS74',
    subjectFullName: 'Natural Language Processing',
    modules: [
      'Overview and Language modeling',
      'Word level and syntactic analysis',
      'Extracting Relations from texts',
      'Evaluating Self-Explainations in iStart',
      'Information Retrieval and Lexical Resources'
    ],
    urls: [
      'https://drive.google.com/open?id=1hU1AYOd5vKZe8Q996GDRTeZ904716lwP',
      'https://drive.google.com/open?id=10YvkflXqDWb0S9yjGEdfQ6KqBFkcBOR8',
      'https://drive.google.com/open?id=1yPgazdPmxKhC5ZMP3UgPKhtMDloAa5tC',
      'https://drive.google.com/open?id=1eepx_Aweih3IOQEzjpwI3Ar_sbArIi-N',
      'https://drive.google.com/open?id=1yJ8TeFGF_qZhwXR7R2-D7QTOkGiZLxBE'
    ],
  },
  {
    subject: '15CS75',
    subjectFullName: 'Digital Image Processing',
    modules: [
      'Introduction',
      'Image Enhancement in Spacial Domain',
      'Image Enhancement in Frequency Domain',
      'Image Segmentation',
      'Image Compression',
    ],
    urls: [
      'https://drive.google.com/open?id=1hU1AYOd5vKZe8Q996GDRTeZ904716lwP',
      'https://drive.google.com/open?id=10YvkflXqDWb0S9yjGEdfQ6KqBFkcBOR8',
      'https://drive.google.com/open?id=1yPgazdPmxKhC5ZMP3UgPKhtMDloAa5tC',
      'https://drive.google.com/open?id=1eepx_Aweih3IOQEzjpwI3Ar_sbArIi-N',
      'https://drive.google.com/open?id=1yJ8TeFGF_qZhwXR7R2-D7QTOkGiZLxBE'
    ],
  },
  {
    subject: '15CS76',
    subjectFullName: 'Final Year Seminar Topics',
    modules: [
      '--EMPTY--',
      '--EMPTY--',
      '--EMPTY--',
      '--EMPTY--',
      '--EMPTY--',
    ],
    urls: [
      'https://drive.google.com/open?id=1hU1AYOd5vKZe8Q996GDRTeZ904716lwP',
      'https://drive.google.com/open?id=10YvkflXqDWb0S9yjGEdfQ6KqBFkcBOR8',
      'https://drive.google.com/open?id=1yPgazdPmxKhC5ZMP3UgPKhtMDloAa5tC',
      'https://drive.google.com/open?id=1eepx_Aweih3IOQEzjpwI3Ar_sbArIi-N',
      'https://drive.google.com/open?id=1yJ8TeFGF_qZhwXR7R2-D7QTOkGiZLxBE'
    ],
  }
];

const styles = () => ({
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  }
});
class DAGNotesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondary: true,
    }
  }
  getNotes = () => {
    const {secondary} = this.state;
    const {classes} = this.props;

    this.notes =[];
    URLS.map((subject,index) => {
      this.notes.push(
      <Grid key={index} item={true} sm={4} md={4} lg={4}>
        <Paper className='grid-paper'>
          <Typography style={{fontFamily: 'Ossb !important', fontSize: 20, color: '#000'}}>Subject Name</Typography>
          <Typography style={{fontFamily: 'Ossb !important', fontSize: 20, color: '#000'}}>{subject.subjectFullName}</Typography>
          <Typography style={{fontFamily: 'Ossb !important', fontSize: 20, color: '#000'}}>{subject.subject}</Typography>
          <List style={{display: 'flex', flexDirection: 'column'}}>
            <ListItem><ListItemIcon><FolderIcon /></ListItemIcon>
              <a href={subject.urls[0]} target="_blank">
            <ListItemText
              classes={{ primary: classes.primaryText, secondary: classes.secondaryText}}
              primary='Module 1'
                secondary={subject.modules[0]}
            /></a></ListItem>
            <ListItem><ListItemIcon><FolderIcon /></ListItemIcon>
              <a href={subject.urls[1]} target="_blank">
              <ListItemText
                classes={{ primary: classes.primaryText, secondary: classes.secondaryText}}
                primary='Module 2'
                secondary={subject.modules[1]}
              /></a></ListItem>
            <ListItem><ListItemIcon><FolderIcon /></ListItemIcon>
              <a href={subject.urls[2]} target="_blank">
              <ListItemText
                classes={{ primary: classes.primaryText, secondary: classes.secondaryText}}
                primary='Module 3'
                secondary={subject.modules[2]}
              /></a></ListItem>
            <ListItem><ListItemIcon><FolderIcon /></ListItemIcon>
              <a href={subject.urls[3]} target="_blank">
              <ListItemText
                classes={{ primary: classes.primaryText, secondary: classes.secondaryText}}
                primary='Module 4'
                secondary={subject.modules[3]}
              /></a></ListItem>
            <ListItem><ListItemIcon><FolderIcon /></ListItemIcon>
              <a href={subject.urls[4]} target="_blank">
              <ListItemText
                classes={{ primary: classes.primaryText, secondary: classes.secondaryText}}
                primary='Module 5'
                secondary={subject.modules[4]}
              /></a></ListItem>
          </List>
        </Paper>
      </Grid>);
    });
    return this.notes;
  };

  render() {
    return(
      <Grid container={true} spacing={40}>
        {this.getNotes()}
      </Grid>
    );
  }
}

export default withStyles(styles)(DAGNotesComponent);
