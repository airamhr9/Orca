import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, ButtonBase, CardHeader, Grid, IconButton, ListItemIcon, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container } from '_/Backend/objects/container';
import { useHistory } from 'react-router';
import {startContainer, restartContainer, deleteContainer, pauseContainer} from '_/Backend/Services';
import StartIcon from '@material-ui/icons/PlayArrowRounded';
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import RestartIcon from '@material-ui/icons/ReplayRounded';
import PauseIcon from '@material-ui/icons/PauseRounded';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ffffff',
      minWidth: 215,
    },
    card_body: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#bdbdbd',
    },
    image: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#bdbdbd',
      marginTop: 10
    },
    status: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    card: {
     borderRadius: 15,
     borderColor: "#1A1A1A"
    },
    cardAction: {
      display: 'block',
      textAlign: 'initial'
    }
});

function ContainerCard({id, name, image, status} : Container) {
    const classes = useStyles();
    const history = useHistory();
    const handleClick = () => history.push({pathname: '/container_details', state: {id : id, name: name, status: status, image: image}})

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (event: React.MouseEvent<HTMLLIElement>) => {
      event.stopPropagation();
      setAnchorEl(null);
    };

    const startContClick = (event: React.MouseEvent<HTMLLIElement>) =>{ 
      event.stopPropagation();
      startContainer(id)
      setAnchorEl(null);
      window.location.reload();
    };

    const restartContClick = (event: React.MouseEvent<HTMLLIElement>) =>{
      event.stopPropagation();
       restartContainer(id)
       setAnchorEl(null);
      window.location.reload();
    };

    const pauseContClick = (event: React.MouseEvent<HTMLLIElement>) =>{ 
      event.stopPropagation();
      pauseContainer(id)
      setAnchorEl(null);
      window.location.reload();
    };

    const deleteContClick = (event: React.MouseEvent<HTMLLIElement>) =>{ 
      event.stopPropagation();
      deleteContainer(id)
      setAnchorEl(null);
      window.location.reload();
    };


    return (
      <Card className={classes.card} variant="outlined">
       <ButtonBase disableTouchRipple={true} className={classes.cardAction} onClick={handleClick}>
        <CardHeader
          title={
            <Box mb={2}>
              <Typography className={classes.card_body} color="textSecondary">
                  {status}
              </Typography>
            </Box>
          }
          action={
            <div>
              <IconButton aria-label="actions" onClick={handleMenuOpen}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                  {status.startsWith("Up") ?
                    <MenuItem 
                      dense={true}
                      onClick={pauseContClick}>
                      <ListItemIcon>
                        <PauseIcon fontSize="small" />
                      </ListItemIcon>
                      Pause
                    </MenuItem>
                  :
                  <MenuItem  
                    onClick={startContClick}>
                      <ListItemIcon>
                        <StartIcon fontSize="small" />
                      </ListItemIcon>
                    Start
                  </MenuItem>
                  }
                <MenuItem 
                  onClick={restartContClick}>
                    <ListItemIcon>
                      <RestartIcon fontSize="small" />
                    </ListItemIcon>
                    Restart
                </MenuItem>
                <MenuItem 
                  dense={true}
                  onClick={deleteContClick}>
                  <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  Delete
                </MenuItem>
              </Menu>
            </div>
          }>
        </CardHeader>
          <CardContent>
            <Typography className={classes.image}>
              {image}
            </Typography>
            <Typography className={classes.title} component="p">
              {name}
            </Typography>
            <Typography className={classes.card_body}>
              {id}
            </Typography>
          </CardContent>
        </ButtonBase>
      </Card>
    );
}

export default ContainerCard;