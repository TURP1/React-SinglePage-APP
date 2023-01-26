import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '1fb709b9-92aa-4a14-b32f-e0c92ad59e35'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

const usersAPI = {
    getUsers(changedPage, usersInOnePage) {
        return instance.get(`users?page=${changedPage}&count=${usersInOnePage}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
    },
    authMe(){
        return instance.get(`auth/me`)
    },
    getProfile(id){
        return instance.get(`profile/${id}`)
    }
}


export default usersAPI