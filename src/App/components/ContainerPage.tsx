import { Box, Grid, makeStyles, Typography} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getRunningContainers, getStoppedContainers } from '_/Backend/Services'
import { Container } from '_/Backend/objects/container'
import ContainerCard from './ContainerCard';
 
const useStyles = makeStyles({
    title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    },
});

function ContainerPage(){
    const classes = useStyles();

  const [runningContainers, setRunningContainers] = useState<Container[]>([])
  const [stoppedContainers, setStoppedContainers] = useState<Container[]>([])

  useEffect(() => {
    setRunningContainers(getRunningContainers()); 
    setStoppedContainers(getStoppedContainers());
   }, []);

    return ( 
      <div>
        <Box ml={10}>
          <Box fontWeight={900} m={1}>
            <Typography className={classes.title} >
              Currently running
            </Typography>
          </Box>
          <Grid container item xs={12} spacing={3}>
            { runningContainers.length == 0 ?
              <Grid container item xs={12} alignContent="center"   alignItems="center"
              justify="center">
                <Typography>
                  Empty
                </Typography>
              </Grid>
            : runningContainers.map((container) => 
              <Grid item key={container.id}>
                <ContainerCard id={container.id} name={container.name} image={container.image} status={container.status}/>
              </Grid>
            )} 
          </Grid>
          <Box fontWeight={900} m={1} mt={2}>
            <Typography className={classes.title} >
              Stopped
            </Typography>
          </Box>
          <Grid container item xs={12} spacing={3}>
            {stoppedContainers.length == 0 ? 
              <Grid container item xs={12} alignContent="center"   alignItems="center"
              justify="center">
                <Typography>
                  Empty
                </Typography>
              </Grid>
             : stoppedContainers.map((container) => 
              <Grid item key={container.id}>
                <ContainerCard id={container.id} name={container.name} image={container.image} status={container.status}/>
              </Grid>
            )} 
          </Grid>
        </Box>
      </div>
     );
}
 
export default ContainerPage;