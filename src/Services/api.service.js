
import methods from '../fetch';

export const getMeetings = async () => {
    return await methods.get('/meetings')
}

export const login = async (loginData) => {
    return await methods.post('/login', loginData)
}

export const createMeeting = async (data) => {
    return await methods.post('/meetings', data)
}