import { Box, Button, Card, CardContent, CardHeader, colors, Container, createStyles, Grid, makeStyles, Paper, Tab, Tabs, Theme, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import { useLocation } from 'react-router';
import { containerInspect } from '_/Backend/Services';
import DetailsTable from './DetailsTable';
import ImageTable from './ImageTable';
import NetworkTable from './NetworkTable';
import StartIcon from '@material-ui/icons/PlayArrowRounded';
import DeleteIcon from '@material-ui/icons/DeleteRounded';

const useStyles =  makeStyles((theme : Theme) => 
  createStyles({
    header: {
      backgroundColor: '#2a2a2a'
    },
    statusCard: {
      maxHeight: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    content: {
      margin: 15
    },
    tab: {
      flexGrow: 1,
    }, 
    preStyle: {
      whiteSpace: 'pre-wrap', 
      wordWrap:'break-word',
      margin: 15
    },
    card: {
      borderRadius: 15,
      borderColor: "#1A1A1A"
    },
    jsonCard: {
      borderRadius: 15,
      borderColor: "#1A1A1A",
      backgroundColor: '#1E1E1E'
    },
    buttonRow: {
      '& > *': {
        margin: theme.spacing(1),
      },
    }
}));


interface LocationState {
  from: {
    pathname: string;
  },
  id: string;
  repository: string;
  tag: string;
  size: string; 
  created: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
          <Box p={3}>{children}</Box>
      )}
    </div>
  );
}

function ImageInspect() {

  const classes = useStyles();

  //Tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const location = useLocation<LocationState>();

  const [containerInspectObj, setContainerInspect] = useState<object>()

  useEffect(() => {
    let inspectJson = containerInspect(location.state.id);
    if(inspectJson != undefined){
      setContainerInspect(inspectJson);
    } else {
      setContainerInspect({"Error": "Inspect empty"})
    }
   }, []);


    return(
        <div>
          <div className={classes.header}>
            <Box ml={9} paddingTop={2}>
              <Box display="flex" mr={5} mb={2}>
                <Box flexGrow={1} className={classes.buttonRow}>
                    <Button startIcon={<StartIcon/>} variant="contained" color="primary" style={{backgroundColor: "#2e7d32"}}>
                      Start
                    </Button>
                </Box>
                <Button startIcon={<DeleteIcon/>} variant="contained" color="primary" style={{alignSelf: "flex-end", backgroundColor: "#373737"}} >
                  Delete
                </Button>
              </Box>
            </Box>
            <Box ml={10}>
              <Box mr={5} fontWeight={700}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Typography variant="h3" color={'textPrimary'}>
                        {location.state.repository}:{location.state.tag}
                    </Typography>
                    <Typography className={classes.content} variant="h5" color={'textPrimary'}>
                        {location.state.created}
                    </Typography>
                </Grid>
              </Box>
              <Box  mb={1} fontWeight={800}>
                <Typography variant="h5" color={'textPrimary'}>
                    {location.state.size}
                </Typography>
              </Box>
              <Box mt={1} mb={1} fontWeight={700}>
                <Typography color={'textPrimary'}>
                    {location.state.id}
                </Typography>
              </Box>
              <Box ml={-10}>
                <Paper className={classes.tab} elevation={0}>
                  <Box ml={10}>
                  <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="inherit" >
                    <Tab label="Complete Output" />
                    <Tab label="To Do" />
                  </Tabs>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </div>

          <Box ml={10}>
            <TabPanel value={value} index={0}>
              <Card variant="outlined" className={classes.jsonCard}>
                <Box padding={5}>
                    <ReactJson src={containerInspectObj!} theme="twilight" collapseStringsAfterLength={40}/>
                </Box>
              </Card>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card variant="outlined" className={classes.card}>
                    <CardHeader title="Image"/>
                      <CardContent>
                        <ImageTable/>
                      </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card variant="outlined" className={classes.card}>
                    <CardHeader title="Details"/>
                      <CardContent>
                        <DetailsTable/>
                      </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card variant="outlined" className={classes.card}>
                    <CardHeader title="Network Settings"/>
                    <CardContent>
                      <NetworkTable/>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </div>
    );
}



export default ImageInspect;