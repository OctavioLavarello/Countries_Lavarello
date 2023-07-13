export const postActivity = (state, { payload }) => {
    return {
        ...state,
        activitiesFront: [...state.activitiesFront, payload]
    };
}