export const getAllActivities = (state, { payload }) => {
    return {
        ...state,
        activities: payload
    } 
}