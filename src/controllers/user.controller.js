import asyncHandler from '../utils/asyncHandler.js';


export const registerUser = asyncHandler(async (req, res, next) => {

    res.status(200).json({ message: 'Ok' })
});