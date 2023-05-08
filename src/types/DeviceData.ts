export interface GetDevice {
    id: number
    device_name: string
    device_description: string
    device_image: URL
    createdAt: string
    updatedAt: string
}
export interface DeviceMeasure {
    id: number
    date: string
    measure_value: number
    measure_type: number
    createdAt: string
    updatedAt: string
    deviceId: number
}
export interface DeviceStatus {
    id: number
    date: string
    voltage: number
    gps: string
    status: string
    message: string
    createdAt: string
    updatedAt: string
    deviceId: number
}

export interface GetDeviceWithData extends GetDevice {
    mesures: DeviceMeasure[]
    statuses: DeviceStatus[]
}
