const User = require('../model/user-model');

const createUser = async (req, res) => {
    try {
        const { body } = req;
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'body is required',
            })
        }

        const user = new User(body);

        await user.save();
        return res.status(200).json({success: true,user});

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            errorMesssage: 'user creation failed',
            error
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
       const users=await User.find()
        res.json({ users })

    }
    catch (err) {
        res.json({ err })
    }
}



module.exports = { getAllUsers,createUser}