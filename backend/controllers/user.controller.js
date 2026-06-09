const userModel = require("../models/user.model");

const registerUser = async (req, res) => {
    const { username, email, password, phone } = req.body;

    try {
        if (!username || !email || !password || !phone) {
            return res.json({ success: false, message: "All fields are required" });
        }

        let existedUser = await userModel.findOne({ email, phone });

        if (existedUser) {
            return res.json({ success: false, message: "User already exists" });
        }

        let hashedPassword = await bcrypt.hash(password, 10);

        await userModel.create({
            username,
            email,
            password : hashedPassword,
            phone,
        })

        return res.json({ success: true, message: "User registered successfully" });
    } catch (error) {
        return res.json({ success: false, message: "Error occurred while registering user" });
    }

}

module.exports = {
    registerUser,
}