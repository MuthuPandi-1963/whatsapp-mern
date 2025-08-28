
import { hashPassword, verifyPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/token.js";
import { User } from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { username,email, password } = req.body;

    if (!username || !password || email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword =await hashPassword(password);

    // create user
    const user = await User.create({
      username,
      phoneNumber,
      email,
      password: hashedPassword,
    });
    const token = generateToken(user._id)
    return res
    .status(201)
    .json({
      _id: user._id,
      username: user.username,
      phoneNumber: user.phoneNumber,
      email : email,
      about  : user.about,
      profileImg : user.profilePicture
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Login user
 * @route   POST /api/users/login
 * @access  Public
 */
export const loginUser = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await verifyPassword(password,user.password);
    if(!isMatch){
        return res.status(401).json({"success":false,"message" : "password is wrong"})
    }
    return res.json({
      _id: user._id,
      username: user.username,
      phoneNumber: user.phoneNumber,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get logged-in user profile
 * @route   GET /api/users/me
 * @access  Private
 */
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Update user profile
 * @route   PUT /api/users/me
 * @access  Private
 */
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.username = req.body.username || user.username;
    user.about = req.body.about || user.about;
    user.profilePicture = req.body.profilePicture || user.profilePicture;
    user.lastSeen = new Date();

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      phoneNumber: updatedUser.phoneNumber,
      about: updatedUser.about,
      profilePicture: updatedUser.profilePicture,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
