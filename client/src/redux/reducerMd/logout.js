export const logout = (state) => {
    return {
        ...state,
        access: false
    }
}