const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to mongoDB..."))
  .catch((err) => console.log("Could not connect to monogoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [""],
  date: Date,
  isPublished: Boolean,
  price: Number,
});

// class with pascal name
const Course = mongoose.model("Course", courseSchema);

//object  with camelcase name
async function createCourse() {
  const course = new Course({
    name: "Node.js Course",
    author: "Anate",
    tags: ["node", "Back-end"],
    isPublished: true,
    price: 33000,
  });

  const result = await course.save();
  console.log("This the result:", result);
}

createCourse();
