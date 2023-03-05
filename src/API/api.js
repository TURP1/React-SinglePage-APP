import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '1fb709b9-92aa-4a14-b32f-e0c92ad59e35'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPI = {
    getUsers(changedPage, usersInOnePage) {
        return instance.get(`users?page=${changedPage}&count=${usersInOnePage}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    loginMe(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`,
            { email, password, rememberMe, captcha })
    },
    deleteMe() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    changeStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    changePicture(photo) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        
    }


}

export const securityApi = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}
