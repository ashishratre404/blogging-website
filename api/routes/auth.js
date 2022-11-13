import express from "express";
const router = express.Router();

import bcrypt from 'bcryptjs';
import User from '../models/User.js';

// REGISTER 
router.post('/register', async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error);
    }
})

// LOGIN 
router.post('/login', async (req, res) => {

    try {
        const user = await User.findOne({username: req.body.username});
        if (!user) return res.status(400).json('worng credentials!');

        const isSamePassword = await bcrypt.compare(req.body.password, user.password);
        if(!isSamePassword) return res.status(400).json('wrong credentials!');

        const {password, ...others} = user._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }

})

export default router;