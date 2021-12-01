const { User } = require("../models");

const SendMoney = async(req, res) => {
    const { email, price } = req.body;
    

    try{
        const user = await User.findOne({
            where: {
                email
            },
        });
        const Money = user.money;
        
        const Change = Money - price;

        console.log(Money, "-", price, "=", Change);

        await User.update({
            money : Change
        },  
        {
            where : { email : email }
        });

        res.status(200).json({
            message: "송금 성공"
        });

    } catch(err) {
        console.error(err);
        res.status(400).json({
            message: "송금 실패"
        })
    }
};

module.exports ={
    SendMoney
};