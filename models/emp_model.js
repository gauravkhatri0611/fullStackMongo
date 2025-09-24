const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Gaurav:Gaurav@cluster0.rpmzwku.mongodb.net/IBM_RECS?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(console.log("connected to mongoDB"))
  .catch((err) => {
    console.log("Connection failed\n" + err);
  });

const emp_schema = mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  city: { type: String, required: true },
  salary: { type: Number, required: true },
  email: { type: String, required: true },
});

const emp_model = mongoose.model("ibm_emp", emp_schema);

module.exports = emp_model;
