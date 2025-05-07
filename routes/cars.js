/* ben yazdim ve olusturdum bu dosyayi --}} */
var express = require("express");
var router = express.Router();

//en son ekle
const DatabaseSync = require("better-sqlite3");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/cars.db");


//ilk bu kismi yazacaksin ama data kisminda burayi silip asagidaki kismi yazacaksin.
//const cars = [
  //  { id:1, type:"BMW X1", price: 320, imageUrl:"/images/car1.png"},
    //{ id:2, type:"BMW M2", price: 280, imageUrl:"/images/car2.png"},
    //{ id:3, type:"Ford Explorer", price: 380, imageUrl:"/images/car3.png"},

  //];

  router.get("/", (req, res) => {
    const db = req.app.locals.db;
    const vehicleType = req.query.vehicleType;
  
    let cars;
    if (vehicleType && vehicleType !== "") {
      const statement = db.prepare("SELECT * FROM cars WHERE vehicleType = ?");
      cars = statement.all(vehicleType);
    } else {
      const statement = db.prepare("SELECT * FROM cars");
      cars = statement.all();
    }
  
    res.render("cars/index", {
      title: "Cars",
      cars: cars,
      type: vehicleType // formda seçili değeri korumak için
    });
  });

// /cars → tüm arabaları listele, ilk basta yaz data kisminda
//usttekini yaz bu kismi sil!!

//router.get("/", (req, res) => {
  //  res.render("cars/index", {
    //    title: "Cars",
      //  cars: cars
    //});
//});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const db = req.app.locals.db;
  
    const statement = db.prepare("SELECT * FROM cars WHERE id = ?");
    const selectedCar = statement.get(id);
  
    if (!selectedCar) return res.status(404).render("error");
  
    res.render("cars/detail", {
      title: selectedCar.type,
      car: selectedCar
    });
  });
  

// /cars/:id → detay sayfası

//router.get("/:id", (req, res) => {
//    const id = parseInt(req.params.id);
  //  const selectedCar = cars.find(car => car.id === id);

    //if (!selectedCar) return res.status(404).render("error");

    //res.render("cars/detail", {
      //  title: selectedCar.type,
        //car: selectedCar
    //});
//});

router.post("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, pickupDate, message } = req.body;

  const db = new DatabaseSync("./data/cars.db");
  db.prepare(`
    INSERT INTO bookings (carId, name, email, pickupDate, message)
    VALUES (?,?,?,?,?)
    `).run(id, name, email, pickupDate, message);

    res.redirect("/thank-you");
}
);

module.exports = router;