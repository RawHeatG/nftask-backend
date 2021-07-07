const express = require("express");
const router = express.Router();
const { Quiz } =  require("../models/quiz.model");

router.route("/")
    .get(async (req,res)=> {
        try{
            const { quizName } = req.params;
            const quizes = await Quiz.find({});
            console.log(quizes);
            res.status(200).json({ success: true, data: quizes });
        }catch(err){
            res.status(500).json({ success: false, error: err })
        }
    })

module.exports = router;