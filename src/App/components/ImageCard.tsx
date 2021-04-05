import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { DockerImage } from '_/Backend/objects/image';
import { Grid } from '@material-ui/core';

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
      marginTop: 50
    },
    status: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    card: {
     borderRadius: 15,
     borderColor: "#1A1A1A"
    }
  });


function ImageCard({id, repository, tag, size, created} : DockerImage) {
    const classes = useStyles();
  
    return (
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography className={classes.card_body} color="textSecondary">
                {created}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.card_body} color="textSecondary">
                {size}
              </Typography>
            </Grid>
          </Grid>
          <Typography className={classes.tag}>
            {tag}
          </Typography>
          <Typography className={classes.title} component="p">
            {repository}
          </Typography>
          <Typography className={classes.card_body} color="textSecondary" >
            {id}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default ImageCard;