const mongoose = require("mongoose");
const { Schema } = mongoose;

const OptionSchema = new Schema({
    option:{
        type:  String,
        required: [true, "Option is required."]
    },
    isRight: {
        type: Boolean,
        required: [true, "isRight is required."]
    },
    id: {
        type: Number,
        required: [true, "ID is required."]
    }
});

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: [true, "Question is required."]
    },
    imgUrl: {
        type: String,
        required: [true, "imgUrl is required."]
    },
    selected: {
        type: Number,
        default: null
    },
    options: {
        type: [OptionSchema],
        required: [true, "Options are required."]
    }

})

const QuizSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required."]
    },
    id: Number,
    questions: {
        type: [QuestionSchema],
        required: [true, "Questions are required."]
    }
})

const Quiz = mongoose.model("Quiz", QuizSchema)

// const { quizes } = require("./quizData")
// console.log("Idarrrrrrrrrrrrrrrrrrr",quizes)


// const uploadQuizes = async (quizes) => {
//     console.log(quizes)
//     quizes.map(async (quiz) => {
//         const newQuiz = Quiz(quiz);
//         console.log({newQuiz});
//         const saved = await newQuiz.save();
//         console.log({saved})
//     })
// }

module.exports = { Quiz }