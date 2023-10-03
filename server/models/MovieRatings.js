import { Schema, model } from "mongoose";

const MovieRatingsSchema = new Schema({
  idMovie: {
    type: String,
    require: true,
  },
  rating:{
    type: Number,
    require: true,
    min: 1,
    max: 5,
  },
  comments: {
    type: String,
    required: false,
    maxLength: 600,
  },
  votes: {
    type: Number,
    default: 0,
    increment: true,
  },
});

export default model("MovieRatings", MovieRatingsSchema);