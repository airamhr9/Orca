import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { DockerImage } from '_/Backend/objects/image';
import { Box, ButtonBase, CardHeader, Grid, IconButton, ListItemIcon, Menu, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router';
import StartIcon from '@material-ui/icons/PlayArrowRounded';
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { deleteImage, startImage } from '_/Backend/Services';

const useStyles = makeStyles({
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
    tag: {
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


function ImageCard({id, repository, tag, size, created} : DockerImage) {
    const classes = useStyles();
    const history = useHistory();
    const handleClick = () => history.push({pathname: '/image_details', state: {id : id, repository: repository, tag: tag, size: size, created: created}})

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (event: React.MouseEvent<HTMLLIElement>) => {
      event.stopPropagation();
      setAnchorEl(null);
    };


    const deleteImgClick = (event: React.MouseEvent<HTMLLIElement>) =>{ 
      event.stopPropagation();
      deleteImage(id)
      setAnchorEl(null);
      window.location.reload();
    };

    const startImgClick = (event: React.MouseEvent<HTMLLIElement>) =>{ 
      event.stopPropagation();
      startImage(id)
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
                    {created}
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
                  <MenuItem  
                    onClick={startImgClick}>
                      <ListItemIcon>
                        <StartIcon fontSize="small" />
                      </ListItemIcon>
                    Start
                  </MenuItem>
                  <MenuItem 
                    dense={true}
                    onClick={deleteImgClick}>
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
            <Typography className={classes.tag}>
              {tag}
            </Typography>
            <Typography className={classes.title} component="p">
              {repository}
            </Typography>
            <Grid container direction="row" justify="space-between">
              <Grid item>
                <Typography className={classes.card_body} color="textSecondary" >
                  {id}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.card_body} color="textSecondary">
                  {size}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </ButtonBase>
      </Card>
    );
}

export default ImageCard;