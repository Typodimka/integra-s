export interface IClients {
    name: string;
    ipAddressServer: string;
    user: string;
    os: string;
    timeStart: string;
    version: string;
    cpuUsage: number;
    memoryUsage: number;
    hddUsage: number;
    modal: {
        deviceInformation: {
            id: number;
            timeWork: string;
            timeWorkSoftware: string;
            gpsGlonass: string;
            systemTime: string;
            configuredCameras: string;
            noConnected: string;
            withRemarks: number;
            connected: number;
        }
        unloading: string;
        software: {
            recognitionLibrary: string;
            timeLibrary: string;
            unloadModule: string;
            webInterface: string;
            videoCaptureModule: string;
        }
        cpuModule: {
            ramSize: {
                total: number;
                free: number;
            }

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
            }

            informationHdd: {
                physicalDisk: {
                    model: string
                    series: string
                    size: number
                    temp: number
                },
                logicalDisk1: {
                    disk: string;
                    volume: number;
                    free: number;
                    threshold: number;
                },
                logicalDisk2: {
                    disk: string;
                    volume: number;
                    free: number;
                    threshold: number;
                },
                logicalDisk3: {
                    disk: string;
                    volume: number;
                    free: number;
                    threshold: number;
                }

            }
            networkInterfaces: {
                name: string;
                speed: number;
                mac: string;
                ipMask: string;
                currentSpeedIn: number;
                currentSpeedOut: number;
            }
        }

    }
}