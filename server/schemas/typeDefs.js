const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String
    username: String!
    email: String!
    orders: [Order]
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Contact {
    _id: ID
    fname: String!
    email: String!
    telephone: String!
    city: String!
    message: String!
    sentConfirmation: Boolean
    receivedEmail: Boolean
  }

  type Query {
    categories: [Category]
    contact(_id: ID!): Contact
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!
      email: String!
      password: String!
      firstName: String!
      lastName: String
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String!
      lastName: String
      email: String!
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
  }
`;

module.exports = typeDefs;
