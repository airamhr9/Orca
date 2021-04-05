import { Box, Grid, makeStyles, Typography} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import { getDockerImages } from '_/Backend/Services'
import { DockerImage } from '_/Backend/objects/image'
 
const useStyles = makeStyles({
    title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    },
});

function ImagePage(){
    const classes = useStyles();

  const [dockerImages, setDockerImages] = useState<DockerImage[]>([])

  useEffect(() => {
    setDockerImages(getDockerImages()); 
   }, [])


    return ( 
      <div>
        <Box ml={10}>
          <Box fontWeight={900} m={1}>
            <Typography className={classes.title} >
              Images
            </Typography>
          </Box>
          <Grid container item xs={12} spacing={3}>
            {dockerImages.map((image) => 
              <Grid item>
                <ImageCard id= {image.id} repository={image.repository} tag={image.tag} size={image.size} created={image.created}/>
              </Grid>
            )} 
          </Grid>
        </Box>
      </div>
     );
}
 
export default ImagePage;