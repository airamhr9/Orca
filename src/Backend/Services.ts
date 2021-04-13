var execSync = require('sync-exec');
import { Container, containerListFactory } from './objects/container';
import { dockerImageListFactory } from './objects/image';
import { DockerImage } from './objects/image';

//Container Commands
const containerPsCommand : string = "docker ps --format \"{{.ID}}&{{.Names}}&{{.Image}}&{{.Status}}\"";
const stoppedContainerPsCommand : string = "docker ps -a  --format \"{{.ID}}&{{.Names}}&{{.Image}}&{{.Status}}\"| grep Exit";
const containerInspectCommand : string = "docker inspect ";
const deleteContainerCommand : string = "docker rm ";
const startContainerCommand : string = "docker start ";
const restartContainerCommand : string = "docker restart ";
const pauseCommand : string = "docker stop ";
//Image commands
const imageLsCommand : string = "docker images --format \"{{.Repository}}&{{.Tag}}&{{.ID}}&{{.CreatedSince}}&{{.Size}}\"";
const deleteImageCommand : string = "docker image rm ";
const startImageCommand : string = "docker run ";
const downloadImageCommand : string = "docker pull ";

/**
 *  CONTAINER FUNCTIONS 
 */

//Public functions
export function restartContainer(id : string) : boolean{
    let salida = execSync(restartContainerCommand + id);
    console.log(salida.stdout);
    return salida.stdout == id;
}

export function startContainer(id : string) : boolean{
    let salida = execSync(startContainerCommand + id);
    console.log(salida.stdout);
    return salida.stdout == id;
}

export function pauseContainer(id : string) : boolean{
    let salida = execSync(pauseCommand + id);
    console.log(salida.stdout);
    return salida.stdout == id;
}

export function deleteContainer(id : string) : boolean{
    let salida = execSync(deleteContainerCommand + id);
    console.log(salida.stdout);
    return salida.stdout == id;
}

export function containerInspect(id : string) : object{
    let salida = execSync(containerInspectCommand + id);
    let salidaJson = JSON.parse(salida.stdout);
    console.log(salidaJson[0]);
    return salidaJson[0];
}
export function getRunningContainers() : Container[]{
    return processContainers(containerPsCommand);
}

export function getStoppedContainers() : Container[] {
    return processContainers(stoppedContainerPsCommand);
}

//Private functions
function processContainers(command : string) : Container[]{
    let containerList : Container[];
    let salida = execSync(command);
    console.log(salida.stdout);
    containerList = containerListFactory(salida.stdout);
    return containerList;
}


/**
 *  IMAGE FUNCTIONS 
 */

//Public functions
export function getDockerImages() : DockerImage[]{
    let imageList : DockerImage[];
    let salida = execSync(imageLsCommand);
    console.log(salida.stdout)
    imageList = dockerImageListFactory(salida.stdout);
    return imageList;
}

export function deleteImage(id: string){
    let salida = execSync(deleteImageCommand + id);
    console.log(salida.stdout)
}

export function startImage(id: string){
    let salida = execSync(startImageCommand + id);
    console.log(salida.stdout)
}

export function downloadImage(name: string, tag: string){
    let salida = (tag == "") 
        ? execSync(downloadImageCommand + name) 
        : execSync(downloadImageCommand + name + ":" + tag);
    console.log(salida.stdout)
}

function printResult(result : string){
    console.log(result);
}