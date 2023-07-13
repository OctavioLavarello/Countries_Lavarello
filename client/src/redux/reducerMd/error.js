export const error = (state, { payload }) => {
  return {
    ...state,
    error: payload,
  };
}