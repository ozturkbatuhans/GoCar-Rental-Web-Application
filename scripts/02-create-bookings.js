//ben olusturdum en son

const { DatabaseSync} = require("node:sqlite");
const db = new DatabaseSync("./data/cars.db");

db.exec(`
    create table if not exists bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
    carId INTEGER,
    name TEXT,
    email TEXT,
    pickupDate TEXT,
    message TEXT
    )
    `);

console.log("Bookings tabel aangemaakt!");