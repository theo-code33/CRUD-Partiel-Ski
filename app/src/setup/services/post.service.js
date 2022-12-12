import instance from "./api.service";

const END_POINT = '/posts'

const getAll = async () => {
    const response = await instance.get(END_POINT)
    return response.data
}

const getOneById = async (id) => {
    const response = await instance.get(`${END_POINT}/${id}`)
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

const postService = {
    getAll,
    getOneById,
    create,
    update,
    remove
}

export default postService