export interface DockerImage {
    repository: string,
    tag: string,
    id: string,
    created: string, 
    size: string
}

export function dockerImageFactory(imageSingleOutput : string) : DockerImage{
    let slicedOutput : string[] = imageSingleOutput.split("&");

    let DockerImage : DockerImage = {repository: slicedOutput[0], tag: slicedOutput[1], id: slicedOutput[2], created: slicedOutput[3], size: slicedOutput[4]};
    return DockerImage;
}

export function dockerImageListFactory(psOutput : string) : DockerImage[] {
    let stringDockerImages = psOutput.split(/\r\n|\r|\n/);
    stringDockerImages.pop()
    let DockerImageList : DockerImage[] = stringDockerImages.map((DockerImageString) => dockerImageFactory(DockerImageString));
    return DockerImageList;
}