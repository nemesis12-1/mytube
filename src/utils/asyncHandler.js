const asyncHandler = (requestHandler) => (req, res, next) => {
    // requestHandler is a function that returns a promise you can write anything insted on requestHandler ex.(fn)
    Promise.resolve(requestHandler(req, res, next)).catch((error) => {
        next(error);
    });
}
export default asyncHandler;

