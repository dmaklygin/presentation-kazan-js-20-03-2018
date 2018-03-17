export const errorResponse = (errAndResp, callbacks = {}) => (dispatch) => {
  // or another logger...
  console.warn(errAndResp)
}