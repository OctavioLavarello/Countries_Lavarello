export const getAllUsers = (state, { payload }) => {
    return {
        ...state,
        users: payload
    }
}