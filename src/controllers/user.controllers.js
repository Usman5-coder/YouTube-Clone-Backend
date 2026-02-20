import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists: username, email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove passwrod and refresh token field from response
  // check for user creation
  // retrun res

  const { username, email, fullName, password } = req.body;
  console.log("Full Name: ", fullName);

  if (
    [fullName, email, password, username].some((fields) => fields?.trim() == "")
  ) {
    throw new ApiError(400, "All fields are required!");
  }

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "Email or Username already exists! ");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path
});

export { registerUser };
