import { type DeviceData } from '../types/DeviceData'

export const getAllDevicesData = async (): Promise<DeviceData> => {
    try {
        const request = await fetch('http://localhost:3050/admin-api/v0.1/device/data/', {
            method: 'GET'
        })
        if (request.status !== 200) {
            const data = await request.json()
            throw new Error(data.message)
        }
        return await request.json()
    } catch (error) {
        return error
    }
}

export const getAllDevices = async (): Promise<DeviceData> => {
    try {
        const request = await fetch('http://localhost:3050/admin-api/v0.1/device', {
            method: 'GET'
        })
        if (request.status !== 200) {
            const data = await request.json()
            throw new Error(data.message)
        }
        return await request.json()
    } catch (error) {
        return error
    }
}

export const getDeviceByID = async ({ queryKey }): Promise<DeviceData> => {
    try {
        const request = await fetch(`http://localhost:3050/admin-api/v0.1/device/data/${queryKey[1]}`, {
            method: 'GET'
        })
        if (request.status !== 200) {
            const data = await request.json()
            throw new Error(data.message)
        }
        return await request.json()
    } catch (error) {
        return error
    }
}

export const updateDeviceByID = async (data): Promise<DeviceData> => {
    try {
        const request = await fetch(`http://localhost:3050/admin-api/v0.1/device/${data.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        if (request.status !== 200) {
            const data = await request.json()
            throw new Error(data.message)
        }
        return await request.json()
    } catch (error) {
        return error
    }
}
