const express = require("express");
const app = express();

const emp_model = require("./models/emp_model");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", async (req, res) => {
  try {
    //creating a new employee record to save in DB
    const emp_new = new emp_model({
      name: "Gaurav",
      contact: "1234567890",
      city: "canada",
      salary: 5000000,
      email: "gaurav@gmail.com",
    });

    //Now using save function to save the record in DB
    const emp_saved = await emp_new.save();
    if (emp_saved) {
      console.log(
        `New employee saved Successfully in DB as below\n ${emp_saved}`
      );
    }

    res.render("index.ejs", {
      msg: "Employee saved successfully to DB ",
      emp: emp_saved,
    });
  } catch (err) {
    console.log(`user could not be saved due to this error:\n ${err}`);
  }
});
// find by ID and Update, fIND BY ID AND update , co
app.get("/all", async (req, res) => {
  try {
    const all_emp = await emp_model.findById("68d2e6f51bfb0a1ab09dbc97");
    if (all_emp) {
      console.log(`All employees fetched successfully from DB\n ${all_emp}`);
    }
    res.render("all.ejs", { empz: all_emp });
  } catch (err) {
    console.log(`Error in fetching all employees from DB\n ${err}`);
  }
});
