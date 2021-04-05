import { Box, Card, CardContent, colors, Grid, makeStyles, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


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

   let inspectOutput  = [
     {
        "Id": "5cbf7cd12a236739127b384e721bbfd1cb32a320248a786335b1fdb895f97921",
        "Created": "2021-02-27T12:26:37.152426599Z",
        "Path": "docker-entrypoint.sh",
        "Args": [
            "postgres"
        ],
        "State": {
            "Status": "exited",
            "Running": false,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 0,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2021-03-26T09:33:24.94694209Z",
            "FinishedAt": "2021-03-26T10:47:10.335540238Z"
        },
        "Image": "sha256:1f0815c1cb6e74ede323d39ded15fa90182a9ad5c64a3eb405c3f4297e9390e7",
        "ResolvConfPath": "/var/lib/docker/containers/5cbf7cd12a236739127b384e721bbfd1cb32a320248a786335b1fdb895f97921/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/5cbf7cd12a236739127b384e721bbfd1cb32a320248a786335b1fdb895f97921/hostname",
        "HostsPath": "/var/lib/docker/containers/5cbf7cd12a236739127b384e721bbfd1cb32a320248a786335b1fdb895f97921/hosts",
        "LogPath": "/var/lib/docker/containers/5cbf7cd12a236739127b384e721bbfd1cb32a320248a786335b1fdb895f97921/5cbf7cd12a236739127b384e721bbfd1cb32a320248a786335b1fdb895f97921-json.log",
        "Name": "/oikos-postgres",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "docker-default",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "host",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "KernelMemory": 0,
            "KernelMemoryTCP": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/18f1dd72752c324469431dca3905941f909085a52e321b195908fa133921baf2-init/diff:/var/lib/docker/overlay2/ce3ce7623436d1303ea6b04b5630ed163e101410bf179836fb243917d29d3f64/diff:/var/lib/docker/overlay2/5c36f666a9db350cf07d1d71264ce74ff8380fc0a3053fa819973e4ba780e078/diff:/var/lib/docker/overlay2/2195c80226709c274f795bc94eb3be2b4fde6f99e47b8e4b4d03cd7415d8a110/diff:/var/lib/docker/overlay2/d5bb2b98532c828412cc24b76e6039a5d40a144b4cfbfcf04c2a326766aea7e2/diff:/var/lib/docker/overlay2/bf89259dd51d9c06a52460c94fa33fe9967ca89d771873a6f6bfeaf86b66b27b/diff:/var/lib/docker/overlay2/cec1a7999ca7d6c975e803054ff35498d8ad84167bbcb7e411a35f735b3c9003/diff:/var/lib/docker/overlay2/5a31c9af6b8b1fdddb7ad3df44b296509f8ec89102f619aea57c8eb34822d752/diff:/var/lib/docker/overlay2/08184d6c9ebfe3d41789c140c9a9c8dcc0707844e54599a81a6baf302c64b74e/diff:/var/lib/docker/overlay2/7423fc3d56cb5ef854115e00979d699a2c04d2842c7921110df61e91c024f17b/diff:/var/lib/docker/overlay2/1a0e5af313fb42b86dc931e105feadfe4104f37d0e0833608a77e5de835dd015/diff:/var/lib/docker/overlay2/85868999fd8cce8d42d21fcbc8fb430c27636f0b0f81b37dbf00d3819417cbcc/diff:/var/lib/docker/overlay2/25d23b07866961369e2f1c88f440c361cf729a4fa5e8176359511c679300e7ab/diff:/var/lib/docker/overlay2/c66d27f92a86cc72ba2cf8ca3f0c8aeae18e05a83b0b5e845a85cd373bd1a048/diff:/var/lib/docker/overlay2/1d765f5bf06dd98351ddbe5dd58d18b0bed3a82b53dfff2c122ddfa9c81d3b35/diff",
                "MergedDir": "/var/lib/docker/overlay2/18f1dd72752c324469431dca3905941f909085a52e321b195908fa133921baf2/merged",
                "UpperDir": "/var/lib/docker/overlay2/18f1dd72752c324469431dca3905941f909085a52e321b195908fa133921baf2/diff",
                "WorkDir": "/var/lib/docker/overlay2/18f1dd72752c324469431dca3905941f909085a52e321b195908fa133921baf2/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [
            {
                "Type": "volume",
                "Name": "6433a38bbad206bd2ba81733f42bd89818d6c9cb4a95e7bf076c6bfb0fa877b6",
                "Source": "/var/lib/docker/volumes/6433a38bbad206bd2ba81733f42bd89818d6c9cb4a95e7bf076c6bfb0fa877b6/_data",
                "Destination": "/var/lib/postgresql/data",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ],
        "Config": {
            "Hostname": "5cbf7cd12a23",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "5432/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "POSTGRES_PASSWORD=mysecretpassword",
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/lib/postgresql/13/bin",
                "GOSU_VERSION=1.12",
                "LANG=en_US.utf8",
                "PG_MAJOR=13",
                "PG_VERSION=13.2-1.pgdg100+1",
                "PGDATA=/var/lib/postgresql/data"
            ],
            "Cmd": [
                "postgres"
            ],
            "Image": "postgres",
            "Volumes": {
                "/var/lib/postgresql/data": {}
            },
            "WorkingDir": "",
            "Entrypoint": [
                "docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {},
            "StopSignal": "SIGINT"
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "740407c4b4d1ab79a81e4645617ad24ba52ff5bd29f1327f435ae72cdb6289ee",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {},
            "SandboxKey": "/var/run/docker/netns/740407c4b4d1",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "9ed9ca2c05127cb7eb4a1c318616ad753c8a6f39e65e387951171bf1508da4ea",
                    "EndpointID": "",
                    "Gateway": "",
                    "IPAddress": "",
                    "IPPrefixLen": 0,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "",
                    "DriverOpts": null
                }
            }
        }
    }
];

  let inspectOutputString = JSON.stringify(inspectOutput, undefined, 2);

    return(
        <div>
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
                  <Tab label="Text Output" />
                </Tabs>
                </Box>
              </Paper>
            </Box>
            </Box>
          </div>

          <Box ml={10}>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              <pre style={{whiteSpace: 'pre-wrap', wordWrap:'break-word'}}>
                  {inspectOutputString}
              </pre>
            </TabPanel>
          </Box>

        </div>
    );
}

export default InspectPage;