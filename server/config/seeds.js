const db = require("./connection.js");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Donations" },
    { name: "Supplies for Rescue" },
    { name: "Adoptions" },
    { name: "Project Specific Donations" },
  ]);

  console.log("Categories have been seeded.");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "$10 One-Time",
      description: "One time payment of $10",
      image: "cookie-tin.jpg",
      category: categories[0]._id,
      price: 10.0,
    },
    {
      name: "$10 Monthly",
      description: "Monthly payment of $10",
      image: "canned-coffee.jpg",
      category: categories[0]._id,
      price: 10.0,
    },
    {
      name: "$25 One-Time",
      description: "One time payment of $25",
      image: "canned-coffee.jpg",
      category: categories[0]._id,
      price: 25.0,
    },
    {
      name: "$25 Monthly",
      description: "Monthly payment of $25",
      image: "canned-coffee.jpg",
      category: categories[0]._id,
      price: 25.0,
    },
    {
      name: "$50 One-Time",
      description: "One time payment of $50",
      image: "canned-coffee.jpg",
      category: categories[0]._id,
      price: 50.0,
    },
    {
      name: "$50 Monthly",
      description: "Monthly payment of $50",
      image: "canned-coffee.jpg",
      category: categories[0]._id,
      price: 50.0,
    },
    {
      name: "$100 One-Time",
      description: "One time payment of $100",
      image: "canned-coffee.jpg",
      category: categories[0]._id,
      price: 100.0,
    },
    {
      name: "$100 Monthly",
      description: "Monthly payment of $100",
      image: "canned-coffee.jpg",
      category: categories[0]._id,
      price: 100.0,
    },

    {
      name: "Food",
      description:
        "Donations made under this category will go specifically to food for the animals in the rescue.",
      image: "canned-coffee.jpg",
      category: categories[1]._id,
      price: 25.0,
    },

    {
      name: "Treats",
      description:
        "Donations made under this category will go specifically to treats for the animals in the rescue.",
      image: "canned-coffee.jpg",
      category: categories[1]._id,
      price: 25.0,
    },

    {
      name: "Nail Clinic Supplies",
      description:
        "Donations made under this category will go specifically to supplies needed for free nail trim clinics.",
      image: "canned-coffee.jpg",
      category: categories[1]._id,
      price: 25.0,
    },

    {
      name: "Microchip Clinic Supplies",
      description:
        "Donations made under this category will go specifically to supplies needed for free microchip clinics.",
      image: "canned-coffee.jpg",
      category: categories[1]._id,
      price: 25.0,
    },

    {
      name: "Trap, Neuter, Release Supplies",
      description:
        "Donations made under this category will go specifically to supplies needed for the trap, neuter, release programs.",
      image: "canned-coffee.jpg",
      category: categories[1]._id,
      price: 25.0,
    },

    {
      name: "Adoption",
      description:
        "This donation only serves as a paper trail for adopters to possess when they adopt an animal in our care.",
      image: "canned-coffee.jpg",
      category: categories[2]._id,
      price: 10.0,
    },

    {
      name: "The Artist Clowder",
      description:
        "These donations will specifically go toward the trap, neuter, release program currently in operation with the painter-themed stray cats. ",
      image: "canned-coffee.jpg",
      category: categories[3]._id,
      price: 25.0,
    },
  ]);

  console.log("Products have been seeded!");

  await User.deleteMany();

  await User.create({
    firstName: "Mary",
    lastName: "Elenius",
    email: "allanimalrr@gmail.com",
    password: "testtest",
    username: "AARR",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Jacob",
    lastName: "Elenius",
    email: "exemplary.templar@gmail.com",
    password: "testtest",
    username: "weissengheist",
  });

  console.log("Users have been seeded!");

  process.exit();
});
