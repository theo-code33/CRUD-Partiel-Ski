import instance from "./api.service";

const END_POINT = "/shops"

const getOneById = async (id) => {
    const response = await instance.get(`${END_POINT}/${id}`)
    return response.data
}

const getOne = async (credentials) => {
    const response = await instance.post(`${END_POINT}/connect`, credentials)
    return response.data
}

const getBookings = async (id) => {
    const response = await instance.get(`${END_POINT}/${id}/bookings`)
    return response.data
}

const create = async (credentials) => {
    const response = await instance.post(END_POINT, credentials)
    return response.data
}

const update = async (id, credentials) => {
    const response = await instance.put(`${END_POINT}/${id}`, credentials)
    return response.data
}

const remove = async (id) => {
    const response = await instance.delete(`${END_POINT}/${id}`)
    return response.data
}

const shopService = {
    getOneById,
    getOne,
    getBookings,
    create,
    update,
    remove
}

export default shopService