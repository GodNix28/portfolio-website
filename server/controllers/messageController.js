const Message = require("../models/Message");

const sendMessage = async(req,res)=>{

    try{

        const newMessage =
        new Message(req.body);

        await newMessage.save();

        res.status(201).json({
            success:true,
            message:"Message Sent"
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};

module.exports = {
    sendMessage
};