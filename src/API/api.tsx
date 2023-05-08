import { type GetDevice, type GetDeviceWithData } from '../types/DeviceData'

interface ErrorResponse {
    message: string
}

export const getAllDevicesWithData = async (): Promise<GetDeviceWithData[]> => {
    try {
        const request = await fetch('http://localhost:3050/admin-api/v0.1/device/data/', {
            method: 'GET'
        })
        if (request.status !== 200) {
            const data: ErrorResponse = await request.json() as ErrorResponse
            throw new Error(data.message)
        }
        return await request.json() as GetDeviceWithData[]
    } catch (error) {
        return error as ErrorResponse
    }
}

export const getAllDevices = async (): Promise<GetDevice[]> => {
    try {
        const request = await fetch('http://localhost:3050/admin-api/v0.1/device', {
            method: 'GET'
        })
        if (request.status !== 200) {
            const data = await request.json() as ErrorResponse
            throw new Error(data.message)
        }
        return await request.json() as GetDevice[]
    } catch (error) {
        return error as ErrorResponse
    }
}

export const getDeviceWithDataByID = async ({ queryKey }): Promise<GetDeviceWithData> => {
    try {
        const request = await fetch(`http://localhost:3050/admin-api/v0.1/device/data/${queryKey[1]}`, {
            method: 'GET'
        })
        if (request.status !== 200) {
            const data = await request.json() as ErrorResponse
            throw new Error(data.message)
        }
        return await request.json() as GetDeviceWithData
    } catch (error) {
        return error as ErrorResponse
    }
}

export const updateDeviceByID = async (data): Promise<GetDevice> => {
    try {
        const request = await fetch(`http://localhost:3050/admin-api/v0.1/device/${data.id}`, {
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
    } catch (error) {
        return error as ErrorResponse
    }
}
