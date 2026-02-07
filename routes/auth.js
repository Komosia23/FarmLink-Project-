const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req,res)=>{
  try{
    const { name,email,password,role,farm_name } = req.body;
    const user = new User({ name,email,password,role,farm_name });
    await user.save();
    const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET);
    res.json({ user, token });
  }catch(err){ res.status(500).json({ message: err.message }); }
});

// Login
router.post("/login", async (req,res)=>{
  try{
    const { email,password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ message:"User not found" });
    const valid = await user.comparePassword(password);
    if(!valid) return res.status(400).json({ message:"Invalid password" });
    const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET);
    res.json({ user, token });
  }catch(err){ res.status(500).json({ message: err.message }); }
});

module.exports = router;
