const express = require("express");
const app = express();
const port = 4000


app.set("view engine", "ejs");
app.use(express.static("views"));

const currentDate = new Date();
const day = currentDate.getDay();
const hours = currentDate.getHours();

app.use((req, res, next) => {
  if (day >= 1 && day <= 5 && hours >= 9 && hours < 18) {
    next();
  } else {
    res.render("serverClose");
  }

});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/contact", (req, res) => {
  res.render("contact-us");
});

app.get("/services", (req, res) => {
  res.render("ourServices");
});

app.use((req, res) => {
  res.status(404).render("404");
});


app.listen(port, () => {
  console.log(`the server is running on port: ${port}`);
});
