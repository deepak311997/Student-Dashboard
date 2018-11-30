import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import config from '../../config/dag-config';

import {
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import DAGHeaderRoutes from '../route/dag-header-routes';

const drawerWidth = 240;
const { basePath } = config.path;

const styles = theme => ({
  root: {
    display: 'flex',
    // height: '-webkit-fill-available',
    height: '100%',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'white',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // background: 'linear-gradient(45deg,  #f14444 30%, #ffffff 90%)',
    background: 'rgba(0, 0, 0, 0.73) !important',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    backgroundImage: 'url(./img/back.jpg)',
    backgroundSize: 'cover',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    //marginLeft: 0,
  },
  listLabel: {
    fontFamily: 'Ossb',
    color: 'white',
  },
  selected: {
    backgroundColor: 'white !important',
  },
  disable: {
    pointerEvents: 'none',
    backgroundColor: '#000',
    color: '#FFF '
  },
});

class DAGMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedTab: 0,
      tabText: 'Dashboard',
    };
    this.sidebarOptions = [
      {
        label: 'Dashboard',
        to: 'dashboard',
      },
      {
        label: 'Attendance',
        to: 'attendance',
      },
      {
        label: 'Internal Assessment',
        to: 'internals',
      },
      {
        label: 'Calender of Events',
        to: 'calofevents'
      },
      {
        label: 'Class Time Table',
        to: 'timetable',
      },
      {
        label: 'Notes',
        to: 'notes',
      },
      {
        label: 'Upload',
        to: 'upload',
      },
      {
        label: 'About Us',
        to: 'aboutus',
      },
    ];
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateSelectedTab(selectedIndex, text) {
    this.setState({ selectedTab: selectedIndex, open: false, tabText: text});
  }

  render() {
    const { classes, theme } = this.props;
    const { open, selectedTab, tabText } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="primary"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <img src={'./img/logo.png'} style={{ height: 40 }}/>
            <Typography style={{fontFamily: 'Ossb', fontSize: 20, paddingLeft: 20}}>{tabText}</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {this.sidebarOptions.map((option, index) => (
              <NavLink
                key={option.label}
                exact={true}
                to={`${basePath}/${option.to}`}
                style={{textDecoration: 'none'}}
                onClick={this.updateSelectedTab.bind(this,index,option.label)}
                className={`${(!window.config.admin && option.label === 'Upload') ? classes.disable : null}`}
              >
              <MenuItem
                classes={{selected: classes.selected}}
                button
                selected={selectedTab === index}
                >
                <Typography className={`${selectedTab === index ? '' : classes.listLabel}`}>{option.label}</Typography>
              </MenuItem>
              </NavLink>
            ))}
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
        </main>
      </div>
    );
  }
}

DAGMainComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(DAGMainComponent);
