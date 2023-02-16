import { createSelector } from "reselect"


 const getUsers = (state) => {
    return state.findUsersPage.users
}

export const getUsersFilter = createSelector(getUsers, (users) => {
    return users.filter(user => true)
})


export const getUserPage = (state) => {
    return state.findUsersPage.userPageNumber
}

export const getUsersInOnePage = (state) => {
    return state.findUsersPage.usersInOnePage
}

export const getUsersTotalCount = (state) => {
    return state.findUsersPage.usersTotalCount
}

export const getIsFetched = (state) => {
    return state.findUsersPage.isFetched
}

export const getIsFollowingFetched = (state) => {
    return state.findUsersPage.isFollowingFetched
}
