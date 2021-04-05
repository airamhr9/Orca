import { Box, Card, CardContent, colors, Grid, makeStyles, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Convert, ContainerInspect } from "_/Backend/objects/InspectContainer";
import { containerInspect } from "_/Backend/Services";

const useStyles = makeStyles({
  header: {
    backgroundColor: '#2a2a2a'
  },
  root: {
    maxHeight: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE3B3B'
  }, 
  content: {
    margin: 15
  },
  tab: {
    flexGrow: 1,
  }
});

function InspectPage() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  //const [containerInspectObj, setContainerInspect] = useState<ContainerInspect>()

  /*
  useEffect(() => {
    let inspectJson = containerInspect("5c");
    setContainerInspect(Convert.toContainerInspect(JSON.stringify(inspectJson)));
    console.log("IS UNDEFINED? " + containerInspectObj != undefined)
    if(containerInspectObj != undefined)
        console.log("WEEEEEEEEEEEE " + containerInspectObj)
   }, []);
   */
    
    return(
        <div className={classes.header}>
          <Box ml={10} paddingTop={2}>
          <Box mr={5} fontWeight={900}>
            <Grid container direction="row" justify="space-between" alignItems="center" >
              <Typography variant="h3" color={'textPrimary'}>
                oikos-postgres
              </Typography>
              <Card className={classes.root} elevation={0}>
                  <Typography className={classes.content} color={'textPrimary'}>
                    Exited
                  </Typography>
              </Card>
            </Grid>
          </Box>
          <Box mt={1} mb={1} fontWeight={700}>
            <Typography color={'textPrimary'}>
              5cbf7cd12a236739127b384e721bbfd1cb32a320248a786335b1fdb895f97921
            </Typography>
          </Box>
          <Box ml={-10}>
            <Paper className={classes.tab} elevation={0}>
              <Box ml={10}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="inherit"
              >
                <Tab label="Details" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
              </Box>
            </Paper>
          </Box>
          </Box>
        </div>
    );
}

export default InspectPage;