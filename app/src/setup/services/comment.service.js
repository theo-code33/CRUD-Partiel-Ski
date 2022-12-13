import instance from "./api.service";

const END_POINT = "/comments"

const getAll = async () => {
    const response = await instance.get(END_POINT)
    return response.data
}

const create = async (credentials) => {
    const response = await instance.post(END_POINT, credentials)
    return response.data
}

const commentsService = {
    getAll,
    create
}

export default commentsService