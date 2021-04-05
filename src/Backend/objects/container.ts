export interface Container {
    id: string,
    name: string,
    image: string, 
    status: string
}

export function containerFactory(psSingleOutput : string) : Container{
    let slicedOutput : string[] = psSingleOutput.split("&");

    let container : Container = {id: slicedOutput[0], name: slicedOutput[1], image: slicedOutput[2], status: slicedOutput[3]};
    return container;
}

export function containerListFactory(psOutput : string) : Container[] {
    let stringContainers = psOutput.split(/\r\n|\r|\n/);
    stringContainers.pop()
    let containerList : Container[] = stringContainers.map((containerString) => containerFactory(containerString));
    return containerList;
}