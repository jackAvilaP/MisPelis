import { Schema, model } from "mongoose";

const MovieFavoritesSchema = new Schema({
  idMovie: {
    type: String,
    require: true,
  },
});

export default model("MovieFavorites", MovieFavoritesSchema);