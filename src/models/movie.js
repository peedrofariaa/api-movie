import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imageBanner:{
        type: String,
        required: true
    },
    imagePoster:{
        type: String,
        required: true
    },linkVideo:{
        type: String,
        required: true
    },category:{
        type: String,
        required: true
    },createdAt:{
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model("Movie", movieSchema);