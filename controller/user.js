const { User } = require("../models");

const login = async(req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    try{
        const user = await User.findOne({
            where: {
                email
            },
        });
        if(user.password === password) {
            res.status(200).json({
                message: "로그인 성공"
            });
        } else {
            res.status(403).json({
                message: "로그인 실패"
            });
        }
    } catch(err) {
        console.error(err);
        res.status(400).json({
            message: "존재하지 않은 유저"
        });
    }
};

module.exports = {
    login
}