import React, { useContext } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NoteIcon from '@material-ui/icons/Note';
import DockerIcon from './res/DockerIcon'
import AddIcon from '@material-ui/icons/AddRounded';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Icon, TextField, Toolbar } from '@material-ui/core';
const drawerWidth = 240;
import DockerfileIcon from '@material-ui/icons/NoteAddRounded';

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
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 0, 0, 11),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1),
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

  const [dialogOpened, setOpenDialog] = React.useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} elevation={0}>
          <Box border={1} borderLeft={0} borderTop={0} borderRight={0} borderColor="#1A1A1A">
            <Toolbar className={classes.appBarContent}>
              <Box display="flex" flexGrow={1}>
                <Box flexGrow={1}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<AddIcon/>}
                    onClick={handleDialogOpen}
                  >
                    Add Image
                  </Button>
                </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<DockerfileIcon/>}
                    onClick={handleDialogOpen}
                  >
                    Run Dockerfile
                  </Button>
              </Box>
              <Dialog open={dialogOpened} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Download Image</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    variant="outlined"
                    margin="dense"
                    id="name"
                    label="Name *"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    variant="outlined"
                    margin="dense"
                    id="label"
                    label="Label"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleDialogClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleDialogClose} color="primary">
                    Download
                  </Button>
                </DialogActions>
              </Dialog>


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
        </List>
      </Drawer>
        <div className={classes.toolbar} />
        </div>
        );
    }