const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginInlineTrace } = require("apollo-server-core");
const path = require("path");
const { authMiddleware } = require("./utils/auth.js");
const dotenv = require("dotenv");
dotenv.config();
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection.js");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  plugins: [ApolloServerPluginInlineTrace()],
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/"));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(
        `API server running on port ${PORT} at http://localhost:${PORT}`
      );
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
