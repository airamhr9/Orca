var execSync = require('sync-exec');
import { Container, containerListFactory } from './objects/container';
import { dockerImageListFactory } from './objects/image';
import { DockerImage } from './objects/image';

const imageCommand : string = "docker images --format \"{{.Repository}}&{{.Tag}}&{{.ID}}&{{.CreatedSince}}&{{.Size}}\"";
const containerPsCommand : string = "docker ps --format \"{{.ID}}&{{.Names}}&{{.Image}}&{{.Status}}\"";
const stoppedContainerPsCommand : string = "docker ps -a  --format \"{{.ID}}&{{.Names}}&{{.Image}}&{{.Status}}\"| grep Exit";
const containerInspectCommand : string = "docker inspect ";

export function printHelloWorld(){
    console.log("Hello World from electron backend");
}

export function getRunningContainers() : Container[]{
    return processContainers(containerPsCommand);
}

export function getStoppedContainers() : Container[] {
    return processContainers(stoppedContainerPsCommand);
}

function processContainers(command : string) : Container[]{
    let containerList : Container[];
    let salida = execSync(command);
    console.log(salida.stdout);
    containerList = containerListFactory(salida.stdout);
    return containerList;
}

export function containerInspect(id : string) : JSON{
    let salida = execSync(containerInspectCommand + id);
    let salidaJson = JSON.parse(salida.stdout);
    console.log(salidaJson[0]);
    return salidaJson[0];
}

export function getDockerImages() : DockerImage[]{
    let imageList : DockerImage[];
    let salida = execSync(imageCommand);
    console.log(salida.stdout)
    imageList = dockerImageListFactory(salida.stdout);
    return imageList;
}


function printResult(result : string){
    console.log(result);
}