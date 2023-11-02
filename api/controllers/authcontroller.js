
import User from '../Database/Models/UserSchema.js';
import bcrypt from 'bcryptjs';
import throwerror from '../utils/error.js';
import jwt from 'jsonwebtoken';

// export const register = async (req, res, next) => {
//   try {
//     // Check if a user with the same email or username already exists
//     const existingUser = await User.findOne({
//       $or: [{ email: req.body.email }, { username: req.body.username }],
//     });

//     if (existingUser) {
//       return next(throwerror(400, "Email/Username Already Exist"));
//     }

//     const hash = bcrypt.hashSync(req.body.password);
//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hash,
//     });

//     const saveUser = await newUser.save();

//     res.status(200).json({ message: "User Created" });
//   } catch (error) {
    
//   }
// };

export const register = async (req, res, next) => {
  try {
    // Check if a user with the same email or username already exists
    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });

    if (existingUser) {
      return next(throwerror(400, "Email/Username Already Exist"));
    }

    const hash = bcrypt.hashSync(req.body.password);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      country:req.body.country,
      phone:req.body.phone
    });

    const savedUser = await newUser.save();

    res.status(201).json({ message: "User Created" });
  } catch (error) {
    next(error); // Call the error handler with the caught error.
  }
};

export const login = async (req, res, next) => {
  try {
    const Finduser = await User.findOne({ username: req.body.username });

    if (!Finduser) {
      return next(throwerror(400, "User Not Found"));
    }

    const IsPassword = await bcrypt.compare(req.body.password, Finduser.password);

    if (!IsPassword) {
      return next(throwerror(400, "Password Incorrect"));
    }

    const token = jwt.sign(
      { id: Finduser._id, isAdmin: Finduser.isAdmin },
      process.env.PRIVATEKEY
    );

    const { password, isAdmin, ...other } = Finduser._doc;

    res.cookie("accessToken", token, {
      httpOnly: true,
    }).status(200).json({details:{other},isAdmin});
  } catch (error) {
    // Handle and log the error
    console.error(error);
    return next(throwerror(500, "Server Error"));
  }
};
