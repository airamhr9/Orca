// To parse this data:
//
//   import { Convert, ContainerInspect } from "./file";
//
//   const containerInspect = Convert.toContainerInspect(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ContainerInspect {
    id?:              string;
    created?:         Date;
    path?:            string;
    args?:            string[];
    state?:           State;
    image?:           string;
    resolvConfPath?:  string;
    hostnamePath?:    string;
    hostsPath?:       string;
    logPath?:         string;
    name?:            string;
    restartCount?:    number;
    driver?:          string;
    platform?:        string;
    mountLabel?:      string;
    processLabel?:    string;
    appArmorProfile?: string;
    execIDs?:         null;
    hostConfig?:      HostConfig;
    graphDriver?:     GraphDriver;
    mounts?:          Mount[];
    config?:          Config;
    networkSettings?: NetworkSettings;
}

export interface Config {
    hostname?:     string;
    domainname?:   string;
    user?:         string;
    attachStdin?:  boolean;
    attachStdout?: boolean;
    attachStderr?: boolean;
    exposedPorts?: ExposedPorts;
    tty?:          boolean;
    openStdin?:    boolean;
    stdinOnce?:    boolean;
    env?:          string[];
    cmd?:          string[];
    image?:        string;
    workingDir?:   string;
    entrypoint?:   string[];
    onBuild?:      null;
    labels?:       Labels;
    stopSignal?:   string;
}

export interface ExposedPorts {
    the5432TCP?: Labels;
}

export interface Labels {
}

export interface GraphDriver {
    data?: Data;
    name?: string;
}

export interface Data {
    lowerDir?:  string;
    mergedDir?: string;
    upperDir?:  string;
    workDir?:   string;
}

export interface HostConfig {
    binds?:                null;
    containerIDFile?:      string;
    logConfig?:            LogConfig;
    networkMode?:          string;
    portBindings?:         Labels;
    restartPolicy?:        RestartPolicy;
    autoRemove?:           boolean;
    volumeDriver?:         string;
    volumesFrom?:          null;
    capAdd?:               null;
    capDrop?:              null;
    cgroupnsMode?:         string;
    dns?:                  any[];
    dnsOptions?:           any[];
    dnsSearch?:            any[];
    extraHosts?:           null;
    groupAdd?:             null;
    ipcMode?:              string;
    cgroup?:               string;
    links?:                null;
    oomScoreAdj?:          number;
    pidMode?:              string;
    privileged?:           boolean;
    publishAllPorts?:      boolean;
    readonlyRootfs?:       boolean;
    securityOpt?:          null;
    utsMode?:              string;
    usernsMode?:           string;
    shmSize?:              number;
    runtime?:              string;
    consoleSize?:          number[];
    isolation?:            string;
    cpuShares?:            number;
    memory?:               number;
    nanoCpus?:             number;
    cgroupParent?:         string;
    blkioWeight?:          number;
    blkioWeightDevice?:    any[];
    blkioDeviceReadBps?:   null;
    blkioDeviceWriteBps?:  null;
    blkioDeviceReadIOps?:  null;
    blkioDeviceWriteIOps?: null;
    cpuPeriod?:            number;
    cpuQuota?:             number;
    cpuRealtimePeriod?:    number;
    cpuRealtimeRuntime?:   number;
    cpusetCpus?:           string;
    cpusetMems?:           string;
    devices?:              any[];
    deviceCgroupRules?:    null;
    deviceRequests?:       null;
    kernelMemory?:         number;
    kernelMemoryTCP?:      number;
    memoryReservation?:    number;
    memorySwap?:           number;
    memorySwappiness?:     null;
    oomKillDisable?:       boolean;
    pidsLimit?:            null;
    ulimits?:              null;
    cpuCount?:             number;
    cpuPercent?:           number;
    ioMaximumIOps?:        number;
    ioMaximumBandwidth?:   number;
    maskedPaths?:          string[];
    readonlyPaths?:        string[];
}

export interface LogConfig {
    type?:   string;
    config?: Labels;
}

export interface RestartPolicy {
    name?:              string;
    maximumRetryCount?: number;
}

export interface Mount {
    type?:        string;
    name?:        string;
    source?:      string;
    destination?: string;
    driver?:      string;
    mode?:        string;
    rw?:          boolean;
    propagation?: string;
}

export interface NetworkSettings {
    bridge?:                 string;
    sandboxID?:              string;
    hairpinMode?:            boolean;
    linkLocalIPv6Address?:   string;
    linkLocalIPv6PrefixLen?: number;
    sandboxKey?:             string;
    secondaryIPAddresses?:   null;
    secondaryIPv6Addresses?: null;
    endpointID?:             string;
    gateway?:                string;
    globalIPv6Address?:      string;
    globalIPv6PrefixLen?:    number;
    ipAddress?:              string;
    ipPrefixLen?:            number;
    iPv6Gateway?:            string;
    macAddress?:             string;
    networks?:               Networks;
}

export interface Networks {
    bridge?: Bridge;
}

export interface Bridge {
    ipamConfig?:          null;
    links?:               null;
    aliases?:             null;
    networkID?:           string;
    endpointID?:          string;
    gateway?:             string;
    ipAddress?:           string;
    ipPrefixLen?:         number;
    iPv6Gateway?:         string;
    globalIPv6Address?:   string;
    globalIPv6PrefixLen?: number;
    macAddress?:          string;
    driverOpts?:          null;
}

export interface State {
    status?:     string;
    running?:    boolean;
    paused?:     boolean;
    restarting?: boolean;
    oomKilled?:  boolean;
    dead?:       boolean;
    pid?:        number;
    exitCode?:   number;
    error?:      string;
    startedAt?:  Date;
    finishedAt?: Date;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toContainerInspect(json: string): ContainerInspect {
        return cast(JSON.parse(json), r("ContainerInspect"));
    }

    public static containerInspectToJson(value: ContainerInspect): string {
        return JSON.stringify(uncast(value, r("ContainerInspect")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "ContainerInspect": o([
        { json: "Id", js: "id", typ: u(undefined, "") },
        { json: "Created", js: "created", typ: u(undefined, Date) },
        { json: "Path", js: "path", typ: u(undefined, "") },
        { json: "Args", js: "args", typ: u(undefined, a("")) },
        { json: "State", js: "state", typ: u(undefined, r("State")) },
        { json: "Image", js: "image", typ: u(undefined, "") },
        { json: "ResolvConfPath", js: "resolvConfPath", typ: u(undefined, "") },
        { json: "HostnamePath", js: "hostnamePath", typ: u(undefined, "") },
        { json: "HostsPath", js: "hostsPath", typ: u(undefined, "") },
        { json: "LogPath", js: "logPath", typ: u(undefined, "") },
        { json: "Name", js: "name", typ: u(undefined, "") },
        { json: "RestartCount", js: "restartCount", typ: u(undefined, 0) },
        { json: "Driver", js: "driver", typ: u(undefined, "") },
        { json: "Platform", js: "platform", typ: u(undefined, "") },
        { json: "MountLabel", js: "mountLabel", typ: u(undefined, "") },
        { json: "ProcessLabel", js: "processLabel", typ: u(undefined, "") },
        { json: "AppArmorProfile", js: "appArmorProfile", typ: u(undefined, "") },
        { json: "ExecIDs", js: "execIDs", typ: u(undefined, null) },
        { json: "HostConfig", js: "hostConfig", typ: u(undefined, r("HostConfig")) },
        { json: "GraphDriver", js: "graphDriver", typ: u(undefined, r("GraphDriver")) },
        { json: "Mounts", js: "mounts", typ: u(undefined, a(r("Mount"))) },
        { json: "Config", js: "config", typ: u(undefined, r("Config")) },
        { json: "NetworkSettings", js: "networkSettings", typ: u(undefined, r("NetworkSettings")) },
    ], false),
    "Config": o([
        { json: "Hostname", js: "hostname", typ: u(undefined, "") },
        { json: "Domainname", js: "domainname", typ: u(undefined, "") },
        { json: "User", js: "user", typ: u(undefined, "") },
        { json: "AttachStdin", js: "attachStdin", typ: u(undefined, true) },
        { json: "AttachStdout", js: "attachStdout", typ: u(undefined, true) },
        { json: "AttachStderr", js: "attachStderr", typ: u(undefined, true) },
        { json: "ExposedPorts", js: "exposedPorts", typ: u(undefined, r("ExposedPorts")) },
        { json: "Tty", js: "tty", typ: u(undefined, true) },
        { json: "OpenStdin", js: "openStdin", typ: u(undefined, true) },
        { json: "StdinOnce", js: "stdinOnce", typ: u(undefined, true) },
        { json: "Env", js: "env", typ: u(undefined, a("")) },
        { json: "Cmd", js: "cmd", typ: u(undefined, a("")) },
        { json: "Image", js: "image", typ: u(undefined, "") },
        { json: "WorkingDir", js: "workingDir", typ: u(undefined, "") },
        { json: "Entrypoint", js: "entrypoint", typ: u(undefined, a("")) },
        { json: "OnBuild", js: "onBuild", typ: u(undefined, null) },
        { json: "Labels", js: "labels", typ: u(undefined, r("Labels")) },
        { json: "StopSignal", js: "stopSignal", typ: u(undefined, "") },
    ], false),
    "ExposedPorts": o([
        { json: "5432/tcp", js: "the5432TCP", typ: u(undefined, r("Labels")) },
    ], false),
    "Labels": o([
    ], false),
    "GraphDriver": o([
        { json: "Data", js: "data", typ: u(undefined, r("Data")) },
        { json: "Name", js: "name", typ: u(undefined, "") },
    ], false),
    "Data": o([
        { json: "LowerDir", js: "lowerDir", typ: u(undefined, "") },
        { json: "MergedDir", js: "mergedDir", typ: u(undefined, "") },
        { json: "UpperDir", js: "upperDir", typ: u(undefined, "") },
        { json: "WorkDir", js: "workDir", typ: u(undefined, "") },
    ], false),
    "HostConfig": o([
        { json: "Binds", js: "binds", typ: u(undefined, null) },
        { json: "ContainerIDFile", js: "containerIDFile", typ: u(undefined, "") },
        { json: "LogConfig", js: "logConfig", typ: u(undefined, r("LogConfig")) },
        { json: "NetworkMode", js: "networkMode", typ: u(undefined, "") },
        { json: "PortBindings", js: "portBindings", typ: u(undefined, r("Labels")) },
        { json: "RestartPolicy", js: "restartPolicy", typ: u(undefined, r("RestartPolicy")) },
        { json: "AutoRemove", js: "autoRemove", typ: u(undefined, true) },
        { json: "VolumeDriver", js: "volumeDriver", typ: u(undefined, "") },
        { json: "VolumesFrom", js: "volumesFrom", typ: u(undefined, null) },
        { json: "CapAdd", js: "capAdd", typ: u(undefined, null) },
        { json: "CapDrop", js: "capDrop", typ: u(undefined, null) },
        { json: "CgroupnsMode", js: "cgroupnsMode", typ: u(undefined, "") },
        { json: "Dns", js: "dns", typ: u(undefined, a("any")) },
        { json: "DnsOptions", js: "dnsOptions", typ: u(undefined, a("any")) },
        { json: "DnsSearch", js: "dnsSearch", typ: u(undefined, a("any")) },
        { json: "ExtraHosts", js: "extraHosts", typ: u(undefined, null) },
        { json: "GroupAdd", js: "groupAdd", typ: u(undefined, null) },
        { json: "IpcMode", js: "ipcMode", typ: u(undefined, "") },
        { json: "Cgroup", js: "cgroup", typ: u(undefined, "") },
        { json: "Links", js: "links", typ: u(undefined, null) },
        { json: "OomScoreAdj", js: "oomScoreAdj", typ: u(undefined, 0) },
        { json: "PidMode", js: "pidMode", typ: u(undefined, "") },
        { json: "Privileged", js: "privileged", typ: u(undefined, true) },
        { json: "PublishAllPorts", js: "publishAllPorts", typ: u(undefined, true) },
        { json: "ReadonlyRootfs", js: "readonlyRootfs", typ: u(undefined, true) },
        { json: "SecurityOpt", js: "securityOpt", typ: u(undefined, null) },
        { json: "UTSMode", js: "utsMode", typ: u(undefined, "") },
        { json: "UsernsMode", js: "usernsMode", typ: u(undefined, "") },
        { json: "ShmSize", js: "shmSize", typ: u(undefined, 0) },
        { json: "Runtime", js: "runtime", typ: u(undefined, "") },
        { json: "ConsoleSize", js: "consoleSize", typ: u(undefined, a(0)) },
        { json: "Isolation", js: "isolation", typ: u(undefined, "") },
        { json: "CpuShares", js: "cpuShares", typ: u(undefined, 0) },
        { json: "Memory", js: "memory", typ: u(undefined, 0) },
        { json: "NanoCpus", js: "nanoCpus", typ: u(undefined, 0) },
        { json: "CgroupParent", js: "cgroupParent", typ: u(undefined, "") },
        { json: "BlkioWeight", js: "blkioWeight", typ: u(undefined, 0) },
        { json: "BlkioWeightDevice", js: "blkioWeightDevice", typ: u(undefined, a("any")) },
        { json: "BlkioDeviceReadBps", js: "blkioDeviceReadBps", typ: u(undefined, null) },
        { json: "BlkioDeviceWriteBps", js: "blkioDeviceWriteBps", typ: u(undefined, null) },
        { json: "BlkioDeviceReadIOps", js: "blkioDeviceReadIOps", typ: u(undefined, null) },
        { json: "BlkioDeviceWriteIOps", js: "blkioDeviceWriteIOps", typ: u(undefined, null) },
        { json: "CpuPeriod", js: "cpuPeriod", typ: u(undefined, 0) },
        { json: "CpuQuota", js: "cpuQuota", typ: u(undefined, 0) },
        { json: "CpuRealtimePeriod", js: "cpuRealtimePeriod", typ: u(undefined, 0) },
        { json: "CpuRealtimeRuntime", js: "cpuRealtimeRuntime", typ: u(undefined, 0) },
        { json: "CpusetCpus", js: "cpusetCpus", typ: u(undefined, "") },
        { json: "CpusetMems", js: "cpusetMems", typ: u(undefined, "") },
        { json: "Devices", js: "devices", typ: u(undefined, a("any")) },
        { json: "DeviceCgroupRules", js: "deviceCgroupRules", typ: u(undefined, null) },
        { json: "DeviceRequests", js: "deviceRequests", typ: u(undefined, null) },
        { json: "KernelMemory", js: "kernelMemory", typ: u(undefined, 0) },
        { json: "KernelMemoryTCP", js: "kernelMemoryTCP", typ: u(undefined, 0) },
        { json: "MemoryReservation", js: "memoryReservation", typ: u(undefined, 0) },
        { json: "MemorySwap", js: "memorySwap", typ: u(undefined, 0) },
        { json: "MemorySwappiness", js: "memorySwappiness", typ: u(undefined, null) },
        { json: "OomKillDisable", js: "oomKillDisable", typ: u(undefined, true) },
        { json: "PidsLimit", js: "pidsLimit", typ: u(undefined, null) },
        { json: "Ulimits", js: "ulimits", typ: u(undefined, null) },
        { json: "CpuCount", js: "cpuCount", typ: u(undefined, 0) },
        { json: "CpuPercent", js: "cpuPercent", typ: u(undefined, 0) },
        { json: "IOMaximumIOps", js: "ioMaximumIOps", typ: u(undefined, 0) },
        { json: "IOMaximumBandwidth", js: "ioMaximumBandwidth", typ: u(undefined, 0) },
        { json: "MaskedPaths", js: "maskedPaths", typ: u(undefined, a("")) },
        { json: "ReadonlyPaths", js: "readonlyPaths", typ: u(undefined, a("")) },
    ], false),
    "LogConfig": o([
        { json: "Type", js: "type", typ: u(undefined, "") },
        { json: "Config", js: "config", typ: u(undefined, r("Labels")) },
    ], false),
    "RestartPolicy": o([
        { json: "Name", js: "name", typ: u(undefined, "") },
        { json: "MaximumRetryCount", js: "maximumRetryCount", typ: u(undefined, 0) },
    ], false),
    "Mount": o([
        { json: "Type", js: "type", typ: u(undefined, "") },
        { json: "Name", js: "name", typ: u(undefined, "") },
        { json: "Source", js: "source", typ: u(undefined, "") },
        { json: "Destination", js: "destination", typ: u(undefined, "") },
        { json: "Driver", js: "driver", typ: u(undefined, "") },
        { json: "Mode", js: "mode", typ: u(undefined, "") },
        { json: "RW", js: "rw", typ: u(undefined, true) },
        { json: "Propagation", js: "propagation", typ: u(undefined, "") },
    ], false),
    "NetworkSettings": o([
        { json: "Bridge", js: "bridge", typ: u(undefined, "") },
        { json: "SandboxID", js: "sandboxID", typ: u(undefined, "") },
        { json: "HairpinMode", js: "hairpinMode", typ: u(undefined, true) },
        { json: "LinkLocalIPv6Address", js: "linkLocalIPv6Address", typ: u(undefined, "") },
        { json: "LinkLocalIPv6PrefixLen", js: "linkLocalIPv6PrefixLen", typ: u(undefined, 0) },
        { json: "SandboxKey", js: "sandboxKey", typ: u(undefined, "") },
        { json: "SecondaryIPAddresses", js: "secondaryIPAddresses", typ: u(undefined, null) },
        { json: "SecondaryIPv6Addresses", js: "secondaryIPv6Addresses", typ: u(undefined, null) },
        { json: "EndpointID", js: "endpointID", typ: u(undefined, "") },
        { json: "Gateway", js: "gateway", typ: u(undefined, "") },
        { json: "GlobalIPv6Address", js: "globalIPv6Address", typ: u(undefined, "") },
        { json: "GlobalIPv6PrefixLen", js: "globalIPv6PrefixLen", typ: u(undefined, 0) },
        { json: "IPAddress", js: "ipAddress", typ: u(undefined, "") },
        { json: "IPPrefixLen", js: "ipPrefixLen", typ: u(undefined, 0) },
        { json: "IPv6Gateway", js: "iPv6Gateway", typ: u(undefined, "") },
        { json: "MacAddress", js: "macAddress", typ: u(undefined, "") },
        { json: "Networks", js: "networks", typ: u(undefined, r("Networks")) },
    ], false),
    "Networks": o([
        { json: "bridge", js: "bridge", typ: u(undefined, r("Bridge")) },
    ], false),
    "Bridge": o([
        { json: "IPAMConfig", js: "ipamConfig", typ: u(undefined, null) },
        { json: "Links", js: "links", typ: u(undefined, null) },
        { json: "Aliases", js: "aliases", typ: u(undefined, null) },
        { json: "NetworkID", js: "networkID", typ: u(undefined, "") },
        { json: "EndpointID", js: "endpointID", typ: u(undefined, "") },
        { json: "Gateway", js: "gateway", typ: u(undefined, "") },
        { json: "IPAddress", js: "ipAddress", typ: u(undefined, "") },
        { json: "IPPrefixLen", js: "ipPrefixLen", typ: u(undefined, 0) },
        { json: "IPv6Gateway", js: "iPv6Gateway", typ: u(undefined, "") },
        { json: "GlobalIPv6Address", js: "globalIPv6Address", typ: u(undefined, "") },
        { json: "GlobalIPv6PrefixLen", js: "globalIPv6PrefixLen", typ: u(undefined, 0) },
        { json: "MacAddress", js: "macAddress", typ: u(undefined, "") },
        { json: "DriverOpts", js: "driverOpts", typ: u(undefined, null) },
    ], false),
    "State": o([
        { json: "Status", js: "status", typ: u(undefined, "") },
        { json: "Running", js: "running", typ: u(undefined, true) },
        { json: "Paused", js: "paused", typ: u(undefined, true) },
        { json: "Restarting", js: "restarting", typ: u(undefined, true) },
        { json: "OOMKilled", js: "oomKilled", typ: u(undefined, true) },
        { json: "Dead", js: "dead", typ: u(undefined, true) },
        { json: "Pid", js: "pid", typ: u(undefined, 0) },
        { json: "ExitCode", js: "exitCode", typ: u(undefined, 0) },
        { json: "Error", js: "error", typ: u(undefined, "") },
        { json: "StartedAt", js: "startedAt", typ: u(undefined, Date) },
        { json: "FinishedAt", js: "finishedAt", typ: u(undefined, Date) },
    ], false),
};
