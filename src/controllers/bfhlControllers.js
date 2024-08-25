const processInput = require('../utils/processInput');

exports.postBfhl = (req, res) => {
    try {
        const { data } = req.body;
        const { numbers, alphabets, highestLowercase } = processInput(data);

       
        const user_id = process.env.USER_ID || "shreya_sahu_09122003";  // Full name and DOB format
        const email = process.env.EMAIL || "shreya.sahu2021@vitbhopal.ac.in";
        const roll_number = process.env.ROLL_NUMBER || "21BSA10144";

        return res.status(200).json({
            is_success: true,
            user_id: user_id,
            email: email,
            roll_number: roll_number,
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
        });

    } catch (error) {
        return res.status(500).json({ is_success: false, message: error.message });
    }
};

exports.getBfhl = (req, res) => {
    return res.status(200).json({ operation_code: 1 });
};
