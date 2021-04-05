import React, { useContext } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DetailsIcon from '@material-ui/icons/DetailsRounded';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NoteIcon from '@material-ui/icons/Note';
import DockerIcon from './res/DockerIcon'
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar } from '@material-ui/core';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: drawerWidth,
      background: "#2a2a2a"
    },
    appBarContent: {
      marginLeft: 65,
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7),
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 0, 0, 11),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default function NavDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} elevation={0}>
          <Box border={1} borderLeft={0} borderTop={0} borderRight={0} borderColor="#1A1A1A">
            <Toolbar className={classes.appBarContent}>
              <Typography variant="h6" noWrap>
                Permanent drawer
              </Typography>
            </Toolbar>
          </Box>
        </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <IconButton onClick={handleDrawerClose}
            className={clsx(classes.menuButton, {
              [classes.hide]: !open,
            })}
          >
             <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key={'Containers'} component={Link} to={"/"}>
              <ListItemIcon><DockerIcon/></ListItemIcon>
              <ListItemText primary="Containers" />
            </ListItem>
            <ListItem button key='Images' component={Link} to={"/images"}>
              <ListItemIcon><NoteIcon /></ListItemIcon>
              <ListItemText primary='Images' />
            </ListItem>
            <ListItem button key=' TemporaryDetails' component={Link} to={"/container_details"}>
              <ListItemIcon><DetailsIcon /></ListItemIcon>
              <ListItemText primary='TemporaryDetails' />
            </ListItem>
        </List>
      </Drawer>
        <div className={classes.toolbar} />
        </div>
        );
    }