import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import connectDB from "./db/db.js";
import resolvers from "./graphql/resolver/resolvers.js";
import typeDefs from "./graphql/types/typeDefs.js";

dotenv.config()

const app = express();
connectDB();
app.get("/", (req, res) => res.send("Welcome to api "));
export default app;


const startSever = async () => {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

  app.use("*", (req, res) => res.status(404).send("Not found"));
  app.listen(process.env.PORT | 3000, () =>
  console.log(`Server on port ${process.env.PORT | 3000}`)
);
};
startSever();