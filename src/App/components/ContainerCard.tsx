import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Container } from '_/Backend/objects/container';

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

function ContainerCard({id, name, image, status} : Container) {
    const classes = useStyles();
  
    return (
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Grid container direction="row" justify="flex-end">
            <Grid item>
                <Typography className={classes.card_body} color="textSecondary">
                    {status}
                </Typography>
            </Grid>
          </Grid>
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
      </Card>
    );
}

export default ContainerCard;