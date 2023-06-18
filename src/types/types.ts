export interface IClient {
    name: string;
    ipAddressServer: string; // Добавлено свойство ipAddressServer
    user: string;
    os: string;
    timeStart: string;
    version: string;
    cpuUsage: number;
    memoryUsage: number;
    hddUsage: number;
    modal: {
        "deviceInformation": {
            id: number;
            timeWork: string;
            timeWorkPo: string;
            gpsGlonass: string;
            systemTime: string;
            configuredCameras: string;
            noConnected: string;
            withRemarks: number;
            connected: number;
        };
        unloading: string;
        software: {
            recognitionLibrary: string;
            timeLibrary: string;
            unloadModule: string;
            webInterface: string;
            videoCaptureModule: string;
        };
        cpuModule: {
            "ramSize": {
                total: number;
                free: number;
            };
            informationCpu: {
                nameCpu: string;
                averageLoad1: number;
                averageLoad2: number;
                maxKernelLoading1: number;
                maxKernelLoading2: number;
                maxStreamLoading1: number;
                maxStreamLoading2: number;
                batchTemperature1: number;
                batchTemperature2: number;
                consumption1: number;
                consumption2: number;
            };
            informationHdd: {
                physicalDisk: {
                    model: string;
                    series: string;
                    size: number;
                    temp: number;
                };
                logicalDisk1: {
                    disk: string;
                    volume: number;
                    free: number;
                    threshold: number | string;
                };
                logicalDisk2: {
                    disk: string;
                    volume: number;
                    free: number;
                    threshold: number | string;
                };
                logicalDisk3: {
                    disk: string;
                    volume: number;
                    free: number;
                    threshold: number | string;
                };
            };
        };
        networkInterfaces: {
            name: string;
            speed: number;
            mac: string;
            ipMask: string;
            currentSpeedIn: number;
            currentSpeedOut: number;
        };
    };
    [key: string]: string | number | object;
}

export interface IServer {
    name: string;
    ipAddressServer: string; // Добавлено свойство ipAddressServer
    idDeviceUsb: number;
    regFile: string;
    os: string;
    timeStart: string;
    version: string;
    cpuUsage: number;
    memoryUsage: number;
    hddUsage: number;
    modal: {
        "deviceInformation": {
            id: number;
            timeWork: string;
            timeWorkPo: string;
            gpsGlonass: string;
            systemTime: string;
            configuredCameras: string;
            noConnected: string;
            withRemarks: number;
            connected: number;
        };
        unloading: string;
        software: {
            recognitionLibrary: string;
            timeLibrary: string;
            unloadModule: string;
            webInterface: string;
            videoCaptureModule: string;
        };
        cpuModule: {
            "ramSize": {
                total: number;
                free: number;
            };
            informationCpu: {
                nameCpu: string;
                averageLoad1: number;
                averageLoad2: number;
                maxKernelLoading1: number;
                maxKernelLoading2: number;
                maxStreamLoading1: number;
                maxStreamLoading2: number;
                batchTemperature1: number;
                batchTemperature2: number;
                consumption1: number;
                consumption2: number;
            };
            informationHdd: {
                physicalDisk: {
                    model: string;
                    series: string;
                    size: number;
                    temp: number;
                };
                logicalDisk1: {
                    disk: string;
                    volume: number;
                    free: number;
                    threshold: number | string;
                };
                logicalDisk2: {
                    disk: string;
                    volume: number;
                    free: number;
                    threshold: number | string;
                };
                logicalDisk3: {
                    disk: string;
                    volume: number;
                    free: number;
                    threshold: number | string;
                };
            };
        };
        networkInterfaces: {
            name: string;
            speed: number;
            mac: string;
            ipMask: string;
            currentSpeedIn: number;
            currentSpeedOut: number;
        };
    };
    [key: string]: string | number | object;

}

