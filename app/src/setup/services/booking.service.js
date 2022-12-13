import instance from "./api.service";

const END_POINT = "/bookings"

const create = async (credentials) => {
    const response = await instance.post(END_POINT, credentials)
    return response.data
}

const bookingsService = {
    create
}

export default bookingsService