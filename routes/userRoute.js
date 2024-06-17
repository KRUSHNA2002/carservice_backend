const express=require("express");
const User = require('../models/User')
const app=express();

const router=express.Router();

router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  });

module.exports=router;