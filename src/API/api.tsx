import { type DeviceData } from '../types/DeviceData'

// export const getAllDevicesData = async (): Promise<DeviceData> =>
//     await fetch('http://demo.subsonic.org/rest/getAlbumList2?u=guest&p=guest&v=1.12.0&c=myapp&type=newest&f=json', {
//         method: 'GET'
//     })
//         .then((res) => {
//             if (res.status !== 200) {
//                 return await res.json().then((data) => {
//                     throw new Error(data.message)
//                 })
//             }
//             return await res.json()
//         })
//         .then((data) => data['subsonic-response'].albumList2.album)

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
