import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '29b5282d-b613-42cd-aaf8-6a34e31a1b92'
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    deleteFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },

    postFollow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfileData(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getUserStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateUserStatus(status: string | null) {
        return instance.put(`profile/status/`, { status: status })
    },

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false ) {
        return instance.post(`auth/login`, { email, password, rememberMe })
        .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
        .then(response => response.data)
    },
}


