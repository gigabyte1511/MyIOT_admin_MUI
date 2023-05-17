import { type GetDevice, type GetDeviceWithData } from '../types/DeviceData'

interface ErrorResponse {
    message: string
}

const baseURL = 'http://13.37.52.101:3050'

export const getAllDevices = async (): Promise<GetDevice[] | ErrorResponse> => {
    const request = await fetch(`${baseURL}/admin-api/v0.1/device`, {
        method: 'GET'
    })
    if (request.status !== 200) {
        const data = await request.json() as ErrorResponse
        throw new Error(data.message)
    }
    return await request.json() as GetDevice[]
}

export const getAllDevicesWithData = async (): Promise<GetDeviceWithData[] | ErrorResponse> => {
    const request = await fetch(`${baseURL}/admin-api/v0.1/device/data`, {
        method: 'GET'
    })
    if (request.status !== 200) {
        const data = await request.json() as ErrorResponse
        throw new Error(data.message)
    }
    return await request.json() as GetDeviceWithData[]
}

export const getDeviceWithDataByID = async ({ queryKey }: { queryKey: string[] }): Promise<GetDeviceWithData | ErrorResponse> => {
    const request = await fetch(`${baseURL}/admin-api/v0.1/device/data/${queryKey[1]}`, {
        method: 'GET'
    })
    if (request.status !== 200) {
        const data = await request.json() as ErrorResponse
        throw new Error(data.message)
    }
    return await request.json() as GetDeviceWithData
}

export const updateDeviceByID = async (data: { id: string }): Promise<GetDevice | ErrorResponse> => {
    const request = await fetch(`${baseURL}/admin-api/v0.1/device/${data.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    })
    if (request.status !== 200) {
        const data = await request.json() as ErrorResponse
        throw new Error(data.message)
    }
    return await request.json() as GetDevice
}

export const deleteDeviceByID = async ({ id }: { id: string }): Promise<GetDevice | ErrorResponse> => {
    const request = await fetch(`${baseURL}/admin-api/v0.1/device/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    if (request.status !== 200) {
        const data = await request.json() as ErrorResponse
        throw new Error(data.message)
    }
    return await request.json() as GetDevice
}
