var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET contact page. */
router.get("/contact", function(req, res, next) {
  res.render("contact", { title: "Contact" });
});


/* ben ekledim */
const cars = [
  { id:1, type:"BMW X1", price: 320, imageUrl:"/images/car1.png"},
  { id:2, type:"BMW M2", price: 280, imageUrl:"/images/car2.png"},
  { id:3, type:"Ford Explorer", price: 380, imageUrl:"/images/car3.png"},
];

router.get("/", function(req, res, next) {
  res.render("index", { title: "Home",
    cars: cars
   });
});

//ben yazdim
router.get("/thank-you", (req, res) => {
  res.render("thank-you", {
    title: "Bedankt"
  });
});

//ben yazdim post icin, son kisimda siliniyor
//router.post("/thank-you", function(req, res) {
 // const { id, name, email, pickupDate, message } = req.body;

  //res.render("thank-you", {
    //title: "Thank You",
    //booking: {
      //id,
      //name,
      //email,
      //pickupDate,
      //message
    //}
  //});
//});

module.exports = router;
